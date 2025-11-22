import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { formatDate } from '@/lib/format';
import { siteConfig } from '@/lib/siteConfig';

export function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const postData = getPostData(slug);
    const description = postData.excerpt;

    return {
      title: postData.title,
      description,
      openGraph: {
        title: postData.title,
        description,
        url: `${siteConfig.url}/blog/${postData.id}`,
        type: 'article',
        publishedTime: postData.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: postData.title,
        description,
      },
    };
  } catch {
    return {
      title: 'Article not found',
      description: `${siteConfig.name} article could not be located.`,
    };
  }
}

export default async function Post({ params }: { params: Promise<{ slug:string }> }) {
  try {
    const { slug } = await params;
    const postData = getPostData(slug);

    return (
      <main className="py-5">
        <div className="article-container">
          <article>
            <header className="mb-5">
              <span className="badge-pill bg-opacity-10 bg-primary text-primary text-uppercase letter-spacing-1">
                {postData.category ?? 'Insight'}
              </span>
              <h1 className="display-5 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
                {postData.title}
              </h1>
              <div className="d-flex flex-wrap gap-3 text-muted mt-3">
                <span>{formatDate(postData.date)}</span>
                <span>{postData.readingTimeMinutes} min read</span>
              </div>
              {postData.tags.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {postData.tags.map((tag) => (
                    <span key={tag} className="badge bg-opacity-10 bg-primary text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            <div className="prose" data-article>
              <MDXRemote source={postData.content} />
            </div>
          </article>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}
