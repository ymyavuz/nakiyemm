'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className={`flex min-h-screen bg-gray-50 ${className}`}>
      <Sidebar />
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout; 