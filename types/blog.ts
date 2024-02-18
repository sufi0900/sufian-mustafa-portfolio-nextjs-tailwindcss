type Author = {
  name: string;
  image: string;
  link: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  link: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
