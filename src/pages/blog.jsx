import React from "react";
import { Box } from "@mui/material";
import Section1 from "@/components/blogComponents/Section1";
import Section7 from "@/components/homeComponents/Section7";
import ArticleSlider from "@/components/common/ArticleSlider";
import { articles, featProps, prevProps } from "@/data/articles";
import FullWidthSlider from "@/components/blogComponents/FullWidthSlider";
import {
  fetchFeaturedPosts,
  fetchLatestPost,
  fetchPosts,
} from "@/utils/apiCalls/fetchPosts";

const BlogPage = ({ latestPost, featuredPosts, posts }) => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <FullWidthSlider latestPost={latestPost} />
        <ArticleSlider props={prevProps} articles={posts} />
        <ArticleSlider props={featProps} articles={featuredPosts} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  try {
    const latestPost = await fetchLatestPost();
    const featuredPosts = await fetchFeaturedPosts(true);
    const posts = await fetchFeaturedPosts(false);

    return {
      props: {
        posts,
        latestPost,
        featuredPosts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
        latestPost: [],
        featuredPosts: [],
      },
    };
  }
}
export default BlogPage;
