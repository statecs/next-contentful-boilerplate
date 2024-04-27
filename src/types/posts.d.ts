interface Post {
    url: string;
    title: string;
    slug: string;
    published: string;
    image?: string;
    description?: string;
    date?: string;
  }
  
  interface Image {
    title: string;
    url: string;
    description?: string;
}


  interface LinkListProps {
    post: Post;
    isMobile: boolean;
    isActive: boolean;
  }


  interface ListLayoutProps {
    list: (Post)[];
    isMobile: boolean;
  }
  
  
  interface LayoutProps {
    children: ReactNode;
  }


