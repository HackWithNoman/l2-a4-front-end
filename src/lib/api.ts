const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error((await res.json()).message || "Login failed");
  return res.json();
}
