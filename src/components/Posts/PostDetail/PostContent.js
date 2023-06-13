import React from 'react';
import style from './PostContent.module.css';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vsDark from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import Image from 'next/image';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

export default function PostContent({ post }) {
  const {
    slug, image, title, content
  } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={style.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={vsDark}
          language={language}
          children={children}
        />
      );
    },
  }

  return (
    <article className={style.content}>
      <PostHeader title={title} image={imagePath} />

      <ReactMarkdown components={customRenderers} linkTarget="_blank">{content}</ReactMarkdown>
    </article>
  )
}
