'use client';

import { ReactNode } from 'react';
import { Footer, Header } from '../../components';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
