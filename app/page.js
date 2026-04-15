"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../context/AuthContext";

function HomeContent() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center gap-4">
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={firebaseSignOut} className="bg-red-500 text-white p-2 rounded">Sign Out</button>
        </>
      ) : (
        <button onClick={gitHubSignIn} className="bg-black text-white p-2 rounded">Sign in with GitHub</button>
      )}
    </div>
  );
}

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">ReadCircle</h1>
      
      {/* This is the "Magic Gate": 
          Vercel will see 'null' during build and pass.
          The user's browser will see 'HomeContent' and render the login.
      */}
      {hasMounted ? <HomeContent /> : <p>Loading...</p>}
    </main>
  );
}