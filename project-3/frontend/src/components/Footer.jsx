'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-base-100 dark:bg-base-900 pt-6">
      <div className="container px-4 mx-auto">
        <div className="border-t border-base py-4 text-center flex justify-between">
          <p className="text-sm">&copy; 2025 Zeur. All rights reserved.</p>

          {/* External link → use normal <a> */}
          <a
            href="https://zeur.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted italic"
          >
            https://zeur.com.br
          </a>

          <p className="text-sm">
            Made by{' '}
            <button
              onClick={() => navigate('/')}
              className="text-sm underline hover:text-base-700"
            >
              Zeur
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
