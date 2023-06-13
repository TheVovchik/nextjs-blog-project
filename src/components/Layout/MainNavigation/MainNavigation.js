import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import style from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={style.header}>
      <Link href="/" passHref>
          <Logo />
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">
              Posts
            </Link>
          </li>

          <li>
            <Link href="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
