export type FAQCategoryTitle =
  | "سوالات مربوط به تک شاپ"
  | "سوالات مربوط به خرید"
  | "سوالات مربوط به تحویل کالا"
  | "سوالات مربوط به گارانتی"
  | "سوالات مربوط به خدمات";

export interface FAQCategoryProps {
  id: number;
  title: FAQCategoryTitle;
}
