import ContentSection from "../contentSection/ContentSection";
import { brands } from "@/data/brands-data";
import PopularBrand from "../brand/brand";

/**
 *  section (popular brands carousel).
 */
const HomePopularBrandsSection = () => {
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
