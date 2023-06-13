import React from 'react';
import style from './AllPosts.module.css';
import PostsGrid from './PostsGrid';

export default function AllPosts({ posts }) {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}
