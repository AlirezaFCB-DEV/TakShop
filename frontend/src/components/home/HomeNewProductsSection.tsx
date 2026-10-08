import ContentSection from "../contentSection/ContentSection";
import { newProducts } from "@/data/new-products-data";
import ProductCard from "../productCard/ProductCard";

/**
 * section (newly added products carousel).
 */
const HomeNewProductsSection = () => {
  return (
    <ContentSection
      title="محصولات تازه"
      description="در این قسمت شما میتوانید محصولاتی را که جدیدا به سایت اضافه شده اند را مشاهده بکنید"
      carousel
      viewAllLinkHref="/new-products"
    >
      {newProducts.map((product) => (
        <ProductCard {...product} key={product.title} />
      ))}
    </ContentSection>
  );
};

export default HomeNewProductsSection;
