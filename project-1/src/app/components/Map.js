'use client';

import React, { useContext } from 'react';
import { Button } from 'flowbite-react';
import { IconSun, IconMoon, IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { GlobalContext } from '../context/GlobalContext';
import Link from 'next/link';

const Map = () => {
  const { theme, setTheme, menu, setMenu } = useContext(GlobalContext);

  return (
    <section className="bg-base-100 dark:bg-base-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-10">
          <div className="py-10"></div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Map);
