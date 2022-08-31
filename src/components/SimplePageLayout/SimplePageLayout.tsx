import clsx from 'clsx';
import Head from 'next/head';
import { ComponentPropsWithRef } from 'react';
import styles from './SimplePageLayout.module.css';

export interface SimplePageLayoutProps extends ComponentPropsWithRef<'div'> {
  title: string;
}

export function SimplePageLayout({
  title,
  children,
  className,
  ...otherProps
}: SimplePageLayoutProps) {
  return (
    <div className={clsx(styles.container, className)} {...otherProps}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </main>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FaberVitale/next-ts-template"
            >
              next-ts-template source
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org/docs/getting-started"
            >
              next.js docs
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
