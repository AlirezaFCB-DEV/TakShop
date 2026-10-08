import ContentSection from "../contentSection/ContentSection";
import { posts } from "@/data/posts-data";
import Post from "../post/post";

/**
 * section (blog posts carousel).
 */
const HomeBlogSection = () => {
  return (
    <ContentSection
      title="بلاگ پست"
      description="در این قسمت شما میتوانید اخبار و مقالات تک شاپ را مشاهده بکنید"
      carousel
      viewAllLinkHref="/posts"
    >
      {posts.map((post) => (
        <Post {...post} key={post.title} />
      ))}
    </ContentSection>
  );
};

export default HomeBlogSection;
