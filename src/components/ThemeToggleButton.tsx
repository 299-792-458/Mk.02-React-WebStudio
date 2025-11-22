'use client';

import { useTheme } from 'next-themes';
import { Dropdown } from 'react-bootstrap';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on the server to prevent hydration mismatch
  }

  const icons = {
    light: <FaSun />,
    dark: <FaMoon />,
    system: <FaDesktop />,
  };

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-theme">
        {icons[theme as keyof typeof icons] || <FaDesktop />}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setTheme('light')}>
          <FaSun className="me-2" /> Light
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme('dark')}>
          <FaMoon className="me-2" /> Dark
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme('system')}>
          <FaDesktop className="me-2" /> System
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
