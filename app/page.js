"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../context/AuthContext";

export default function Home() {
  // 1. Pull the functions from your AuthContext
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 2. Create the click handler
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      // You can add a redirect here later, e.g., router.push('/dashboard')
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  // Build safety check
  if (!hasMounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">ReadCircle</h1>
      
      <div className="mt-8">
        {user ? (
          <div className="text-center">
            <p className="mb-4">Logged in as: <strong>{user.displayName || user.email}</strong></p>
            <button 
              onClick={firebaseSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn}
            className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <span>Sign in with GitHub</span>
          </button>
        )}
      </div>
    </main>
  );
}