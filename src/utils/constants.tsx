
import {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    SparklesIcon,
  } from 'lucide-react'

export const SCROLL_AREA_ID = 'scroll-area';

interface Profile {
  title: string;
  url: string;
  username?: string;
  icon?: JSX.Element;
}

export const PROFILES: Record<string, Profile> = {
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: <LinkedinIcon size={16} />
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com',
    icon: <InstagramIcon size={16} />
  },
  twitter: {
    title: 'X (Twitter)',
    username: '#',
    url: 'https://twitter.com',
    icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>,
  }
};

interface Link {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const LINKS: Link[] = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  }
];
