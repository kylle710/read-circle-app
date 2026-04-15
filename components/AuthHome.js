"use client";
import { useUserAuth } from "../context/AuthContext";

export default function AuthHome() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="mt-8">
      {user ? (
        <div className="text-center">
          <p className="mb-4">Logged in as: <strong>{user.displayName || user.email}</strong></p>
          <button 
            onClick={firebaseSignOut}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button 
          onClick={handleSignIn}
          className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-lg"
        >
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}