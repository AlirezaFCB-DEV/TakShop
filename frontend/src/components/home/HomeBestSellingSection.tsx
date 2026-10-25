import fetchData from "@/utils/fetchData";
import ContentSection from "../contentSection/ContentSection";
// import { BestSellingProducts } from "@/data/best-offers/best-selling-products-data";
import ProductCard from "../productCard/ProductCard";
import { ProductCardProps } from "@/types/ProductCardProps";

/**
 *  section (best-selling products carousel).
 */
const HomeBestSellingSection = async () => {
  const BestSellingProducts = (await fetchData(
    "/data/json/best-selling.json",
  )) as ProductCardProps[];

  return (
    <ContentSection
      title="محصولات پرفروش"
      description="در این قسمت شما میتوانید محصولات پر فروش تک شاپ را در طول هفته گذشته مشاهده بکنید"
      carousel
      viewAllLinkHref="/best-selling-products"
    >
      {BestSellingProducts.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </ContentSection>
  );
};

export default HomeBestSellingSection;
