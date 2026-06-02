"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>You are not logged in</p>;

  return (
    <div>
      <h1>Current User</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
