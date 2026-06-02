const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  login: async (email: string, password: string) => {
    const res = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data.user;
  },

  logOut: async () => {
    const res = await fetch(`${baseURL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Logout failed");
    }

    return data;
  },

  getMe: async () => {
    const res = await fetch(`${baseURL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    return data;
  },
};
