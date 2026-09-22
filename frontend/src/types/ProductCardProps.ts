export interface ProductCardProps {
  image: { src: string; alt: string };
  title: string;
  rate: number;
  isFreeShipping: boolean;
  offer?: number;
  price: number;
}
