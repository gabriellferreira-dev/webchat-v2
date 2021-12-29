import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Zunny Chat' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="new way to connect you to the world" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default Layout;
