import Image from "next/image";

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
  return (
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
    </h1>
  );
}
