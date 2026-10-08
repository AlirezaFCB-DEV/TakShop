import CategoryCard from "../categoryCard/CategoryCard";
import { CategoryCards } from "../categoryCard/categoryCardsData";
import SectionHeader from "../SectionHeader";

const HomeCategoriesSection = () => {
  return (
    <section className="flex min-w-0 flex-col gap-4">
      <SectionHeader
        title="دسته بندی محصولات"
        description="در این قسمت شما میتوانید محصولات مارا به صورت دسته بندی مشاهده کنید"
      />
      <section className="category-card_grid">
        {CategoryCards.map((card, index) => (
          <CategoryCard {...card} key={index} />
        ))}
      </section>
    </section>
  );
};

export default HomeCategoriesSection;
