import React from 'react';
import style from './PostItem.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';

export default function PostItem({ post }) {
  const {
    title, image, excerpt, date, slug,
  } = post;
  const imagePath = `/images/posts/${slug}/${image}`
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={style.post}>
      <Link href={`/posts/${slug}`} passHref>
        <div className={style.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
        </div>

        <div className={style.content}>
          <h3>{title}</h3>

          <time>{formattedDate}</time>

          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
