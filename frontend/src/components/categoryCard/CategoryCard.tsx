import Image from "next/image";
import Link from "next/link";
import { CategoryCardProps } from "./categoryCardsData";

const CategoryCard = ({ href, image, title, alt }: CategoryCardProps) => {
  return (
    <Link href={href} className="category-card group">
      <section className="category-card_surface">
        <Image
          src={image}
          width={150}
          height={150}
          alt={alt}
          className="category-card_image"
        />
        <h3 className="category-card_title">{title}</h3>
      </section>
    </Link>
  );
};

export default CategoryCard;
