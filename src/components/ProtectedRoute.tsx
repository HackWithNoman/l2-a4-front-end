"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

type Role = "ADMIN" | "STUDENT" | "TUTOR";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: Role[];
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
        return;
      }

      if (allowedRoles && !allowedRoles.includes(user.role)) {
        router.replace("/unauthorized");
      }
    }
  }, [user, loading, router, allowedRoles]);

  if (loading) return <p>Loading...</p>;

  if (!user) return null;

  if (allowedRoles && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
