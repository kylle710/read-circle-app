"use client";
import { useUserAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const { user } = useUserAuth();

  return (
    <div className="p-8">
      <h1>User Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome back, {user.displayName}!</p>
          <p>This is your private reading list.</p>
        </div>
      ) : (
        <p>You must be signed in to view your dashboard.</p>
      )}
    </div>
  );
}