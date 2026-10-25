import ContentSection from "../contentSection/ContentSection";
import PopularBrand from "../brand/brand";
import fetchData from "@/utils/fetchData";
import { Brand } from "@/types/brand-props";

/**
 *  section (popular brands carousel).
 */
const HomePopularBrandsSection = async () => {

  const brands = await fetchData("/data/json/brands.json") as Brand[];

  return (
    <ContentSection
      title="برند های محبوب"
      description="در این قسمت شما میتوانید برند های محبوب را که بیشترین فروش را دارن مشاهده بکنید"
      carousel
      viewAllLinkHref="/popular-brands"
    >
      {brands.map((brand) => (
        <PopularBrand
          src={brand.image}
          alt={brand.name}
          key={brand.name}
        />
      ))}
    </ContentSection>
  );
};

export default HomePopularBrandsSection;
