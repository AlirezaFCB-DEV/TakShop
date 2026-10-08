import ContentSection from "../contentSection/ContentSection";
import FAQSection from "../faq/FAQSection";

/**
 * "سوالات متداول" section (FAQ categories + questions).
 */
const HomeFAQSection = () => {
  return (
    <ContentSection
      title="سوالات متداول"
      description="در این قسمت شما میتوانید سوالات متداول را به صورت دسته بندی شده مشاهده کنید"
    >
      <FAQSection />
    </ContentSection>
  );
};

export default HomeFAQSection;
