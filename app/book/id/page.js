"use client";
import { useParams } from "next/navigation";
import { useUserAuth } from "../../../context/AuthContext";

export default function BookDetailPage() {
  const { id } = useParams();
  const { user } = useUserAuth();

  return (
    <div className="p-8">
      <h1>Book Details</h1>
      <p>Viewing book with ID: {id}</p>
      {user ? (
        <p>You are logged in as {user.displayName}</p>
      ) : (
        <p>Please log in to see more details.</p>
      )}
    </div>
  );
}