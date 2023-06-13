import Image from 'next/image';
import React from 'react';
import style from './Hero.module.css';

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image
          src="/images/site/DSC_0022.jpg"
          alt="An image showing Volodya"
          width={300}
          height={300}
        />
      </div>

      <h1>
        Hi, I'm Volodya!
      </h1>

      <p>I blog about web development - especially frontend frameworks like React.</p>
    </section>
  )
}
