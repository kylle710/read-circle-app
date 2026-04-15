"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import the useUserAuth hook
import { useUserAuth } from "../context/AuthContext";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
await gitHubSignIn();
 
// Sign out of Firebase
await firebaseSignOut();
 
// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;

export default function Home() {
  const { user, gitHubSignIn } = useUserAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
       {/* Your Home Page UI */}
    </div>
  );
}
