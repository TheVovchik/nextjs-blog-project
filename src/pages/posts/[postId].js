import PostContent from '@/components/Posts/PostDetail/PostContent';
import React from 'react'
import { getAllPaths, getPostData } from '../../../lib/posts-utils';
import Head from 'next/head';

export default function SinglePostPage({ post }) {
  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PostContent post={post} />
    </>
  );
};

export function getStaticProps(context) {
  const { postId } = context.params;

  const postData = getPostData(`${postId}.md`);

  return {
    props: {
      post: postData,
    },
    revalidate: 3600,
  }
}

export function getStaticPaths() {
  const allPosts = getAllPaths();

  const allPath = allPosts.map((post) => ({
    params: {
      postId: post,
    },
  }));

  return {
    paths: allPath,
    fallback: false,
  }
}
