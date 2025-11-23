'use client';

import React, { useContext } from 'react';
import { Button } from 'flowbite-react';
import { IconSun, IconMoon, IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { GlobalContext } from '../context/GlobalContext';
import Link from 'next/link';

const Header = () => {
  const { theme, setTheme, menu, setMenu } = useContext(GlobalContext);

  return (
    <header className="fixed w-full bg-base-950/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
      <nav className="relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/zeur-logo-2.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto hover:animate-spin dark:invert"
            priority
          />
        </Link>
        <div
          className={
            menu
              ? 'block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl md:hidden'
              : 'hidden md:block md:w-auto'
          }
        >
          <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <Link
              href="/"
              className={
                menu
                  ? 'text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md'
                  : 'text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300'
              }
              onClick={() => setMenu(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={
                menu
                  ? 'text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md'
                  : 'text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300'
              }
              onClick={() => setMenu(false)}
            >
              About
            </Link>

            <Link
              href="/services"
              className={
                menu
                  ? 'text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md'
                  : 'text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300'
              }
              onClick={() => setMenu(false)}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={
                menu
                  ? 'text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md'
                  : 'text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300'
              }
              onClick={() => setMenu(false)}
            >
              Contact
            </Link>
          </ul>
        </div>

        <div className="flex gap-2 ml-auto">
          {/* Theme Switch */}
          <Button
            color="transparent"
            pill
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2"
          >
            {theme === 'dark' ? (
              <IconMoon
                size={20}
                className="text-base-700 dark:text-base-200"
              />
            ) : (
              <IconSun size={20} className="text-base-700 dark:text-base-200" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          color="transparent"
          pill
          onClick={() => setMenu(!menu)}
          className="p-2 md:hidden"
        >
          {menu ? (
            <IconX size={22} className="text-base-700 dark:text-base-200" />
          ) : (
            <IconMenu2 size={22} className="text-base-700 dark:text-base-200" />
          )}
        </Button>
      </nav>
    </header>
  );
};

export default React.memo(Header);
