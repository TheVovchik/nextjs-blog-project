import FeaturedPosts from "@/components/HomePage/FeaturedPosts/FeaturedPosts";
import Hero from "@/components/HomePage/Hero/Hero";
import { getFeaturedPosts } from "../../lib/posts-utils";
import Head from "next/head";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>
          Welcome to my Blog
        </title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />

      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    }
  };
}
