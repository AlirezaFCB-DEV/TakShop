interface ImageProps {
  src: string;
  alt: string;
}

export interface PostProps {
  url: string;
  image: ImageProps;
  title: string;
  date: string;
  category: string;
}
