const fs = require('fs');
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostData(fileName, indx = 1) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const postData = {
    id: indx,
    content,
    ...data,
  }

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPaths() {
  const postFiles = getPostsFiles();

  return postFiles.map((postFile) => postFile.replace(/\.md$/, ''));
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const data = postFiles.map((postFile, indx) => getPostData(postFile, indx + 1));

  return data.sort((postA, postB) => postA.date - postB.date);
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter(post => post.isFeatured);
}