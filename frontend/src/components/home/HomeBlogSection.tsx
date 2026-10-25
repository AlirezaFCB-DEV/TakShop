import fetchData from "@/utils/fetchData";
import ContentSection from "../contentSection/ContentSection";
import Post from "../post/post";
import { PostProps } from "@/types/post-props";

/**
 * section (blog posts carousel).
 */
const HomeBlogSection = async () => {
  const posts = (await fetchData("/data/json/posts.json")) as PostProps[];

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
