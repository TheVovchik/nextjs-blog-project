import React from 'react';
import style from './FeaturedPosts.module.css';
import PostsGrid from '@/components/Posts/PostsGrid';

export default function FeaturedPosts({ posts }) {
  return (
    <section className={style.latest}>
      <h2>
        Featured Posts
      </h2>

      <PostsGrid posts={posts} />
    </section>
  );
};
