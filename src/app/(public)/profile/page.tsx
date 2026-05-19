"use client";

import { useEffect, useState } from "react";

function page() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          credentials: "include",
        });

        const data = await res.json();

        setUser(data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile Page</h1>

      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default page;
