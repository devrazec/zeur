'use client';

import { Button } from 'flowbite-react';
import Header from './components/Header';

export default function ClientNotFound() {
  return (
    <div>
      <Header />
      <div className="p-20 text-center">
        <h1 className="text-3xl font-bold">404 - Not Found</h1>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
