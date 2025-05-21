"use client";
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | ParkPlace',
  description: 'Panel de administrador para ParkPlace',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
