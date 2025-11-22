'use client';

import React, { useContext } from 'react';
import { Footer, FooterBrand, FooterCopyright } from 'flowbite-react';
import { GlobalContext } from '../context/GlobalContext';

const FooterComponent = () => {
  // ✅ Access the global state and updater
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <Footer className="rounded-none">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4 text-center md:p-8 lg:p-10 [&>div]:w-fit">
        <FooterBrand
          alt="Flowbite logo"
          href="https://flowbite.com"
          name="Flowbite"
          src="https://flowbite.com/docs/images/logo.svg"
        />

        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
          <br />
          <strong>Theme:</strong> {theme}
        </p>

        <FooterCopyright
          by="Flowbite™. All Rights Reserved."
          href="https://flowbite.com"
          year={2023}
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          className="px-3 py-2 bg-gray-700 text-white rounded"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Change Theme
        </button>
      </div>
    </Footer>
  );
};

export default React.memo(FooterComponent);
