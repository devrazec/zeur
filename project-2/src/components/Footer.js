'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'flowbite-react';

const Footer = () => {
  // ✅ Access the global state and updater

  return (
    <footer className="bg-base-100 dark:bg-base-900 pt-6">
      <div className="container px-4 mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <Image
            src="/img/zeur-logo-2.png"
            alt={'Logo'}
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
            priority
          />

          <div className="flex flex-row gap-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
          </div>
          <div className="inline-flex gap-2 items-center">
            <Button
              icon="tabler:brand-x"
              href="#"
              color="white"
              className="p-3"
            />
          </div>
        </div> */}

        <div className="border-t border-base py-4 text-center flex justify-between">
          <p className="text-sm">&copy; {'2025 Zeur. All rights reserved.'}</p>
          <Link
            href="https://zeur.com.br"
            className="text-sm text-muted italic"
          >
            https://zeur.com.br
          </Link>
          <p className="text-sm">
            Made by{' '}
            <Link href="https://zeur.com.br" className="text-sm">
              Zeur
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
