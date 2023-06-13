import React from 'react';
import style from './PostsGrid.module.css';
import PostItem from './PostItem';

export default function PostsGrid({ posts }) {
  return (
    <ul className={style.grid}>
      {posts.map(post => (
        <PostItem key={post.id} post={post}/>
      ))}
    </ul>
  );
};
