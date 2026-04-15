"use client";
import { useUserAuth } from "../../context/AuthContext";

export default function AuthPage() {
  const { firebaseSignOut, gitHubSignIn, user } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Sign in to ReadCircle</h1>
      {user ? (
        <p>Logged in as {user.displayName}</p>
      ) : (
        <button onClick={gitHubSignIn} className="p-2 bg-black text-white rounded">
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}