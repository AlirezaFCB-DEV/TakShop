// import fetchData from "@/utils/fetchData";
import ContentSection from "../contentSection/ContentSection";
// import ProductCard from "../productCard/ProductCard";
// import { ProductCardProps } from "@/types/ProductCardProps";

/**
 * section (newly added products carousel).
 */
const HomeNewProductsSection = async () => {
  // const newProducts = (await fetchData(
  //   "/data/json/new-products.json",
  // )) as ProductCardProps[];

  return (
    <ContentSection
      title="محصولات تازه"
      description="در این قسمت شما میتوانید محصولاتی را که جدیدا به سایت اضافه شده اند را مشاهده بکنید"
      carousel
      viewAllLinkHref="/new-products"
    >
      {/* {newProducts.map((product) => (
        <ProductCard {...product} key={product.title} />
      ))} */}
      <div></div>
    </ContentSection>
  );
};

export default HomeNewProductsSection;
