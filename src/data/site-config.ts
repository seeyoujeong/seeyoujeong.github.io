export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'seeyoujeong',
  subtitle: '정리와 기록',
  description: '정리와 기록',
  image: {
    src: '/main.png',
    alt: 'cat'
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Book',
      href: '/book'
    },
    {
      text: 'Tags',
      href: '/tags'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    }
  ],
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/seeyoujeong'
    }
  ],
  hero: {
    image: {
      src: '/hero-cats.jpeg',
      alt: 'cats'
    }
  },
  postsPerPage: 8
};

export default siteConfig;
