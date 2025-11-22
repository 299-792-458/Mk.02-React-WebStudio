import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostFrontMatter = {
  title: string;
  date: string;
  excerpt?: string;
  description?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
};

export type PostListItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  tags: string[];
  featured: boolean;
  readingTimeMinutes: number;
};

export type PostData = PostListItem & {
  content: string;
};

const computeReadingTime = (content: string) => {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

const toExcerpt = (frontMatter: PostFrontMatter, content: string) => {
  if (frontMatter.excerpt) return frontMatter.excerpt;
  if (frontMatter.description) return frontMatter.description;
  return content.replace(/[#>*`\-]/g, '').split('\n').filter(Boolean).join(' ').slice(0, 160).trim() + '...';
};

export function getSortedPostsData(): PostListItem[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const frontMatter = data as PostFrontMatter;

      return {
        id,
        title: frontMatter.title,
        date: frontMatter.date,
        excerpt: toExcerpt(frontMatter, content),
        category: frontMatter.category,
        tags: frontMatter.tags ?? [],
        featured: frontMatter.featured ?? false,
        readingTimeMinutes: computeReadingTime(content),
      } satisfies PostListItem;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.mdx?$/, ''),
      },
    }));
}

export function getPostData(id: string): PostData {
  const mdxPath = path.join(postsDirectory, `${id}.mdx`);
  const mdPath = path.join(postsDirectory, `${id}.md`);

  let fullPath: string | undefined;
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  }

  if (!fullPath) {
    throw new Error(`Post with id ${id} not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontMatter = data as PostFrontMatter;

  return {
    id,
    title: frontMatter.title,
    date: frontMatter.date,
    excerpt: toExcerpt(frontMatter, content),
    category: frontMatter.category,
    tags: frontMatter.tags ?? [],
    featured: frontMatter.featured ?? false,
    readingTimeMinutes: computeReadingTime(content),
    content,
  } satisfies PostData;
}
