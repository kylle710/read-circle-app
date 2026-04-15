"use client";
import dynamic from 'next/dynamic';

// This forces the component to ONLY load in the browser
const AuthHome = dynamic(() => import('../components/AuthHome'), { 
  ssr: false,
  loading: () => <p>Loading authentication...</p>
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">ReadCircle</h1>
      
      {/* The build worker will skip this entirely now */}
      <AuthHome />
    </main>
  );
}