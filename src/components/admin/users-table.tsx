"use client";

import { Eye, UserX, UserCheck, Trash2, Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// TypeScript interface based on your exact data structure
interface UserData {
  id: string;
  name: string;
  email: string;
  role: "TUTOR" | "STUDENT" | "ADMIN" | string; // Fallbacks allowed
  status: "ACTIVE" | "INACTIVE" | "PENDING" | string;
  created_at: string;
}


export function UsersTable() {
  const [users, setUsers] = useState<UserData[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Format dates cleanly (e.g., Apr 15, 2026)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full space-y-4">
      {/* Table Title / Controls Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            User Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage system access, roles, and status profiles.
          </p>
        </div>
      </div>

      {/* Styled Responsive Container */}
      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            {/* Table Header */}
            <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5 font-semibold text-left">User</th>
                <th className="px-6 py-3.5 font-semibold text-left">Role</th>
                <th className="px-6 py-3.5 font-semibold text-left">Status</th>
                <th className="px-6 py-3.5 font-semibold text-left">
                  Joined Date
                </th>
                <th className="px-6 py-3.5 font-semibold text-right">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-muted/40 transition-colors group"
                >
                  {/* Name & Email Column */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                        {user.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </td>

                  {/* Role Badge Column */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                      {user.role}
                    </span>
                  </td>

                  {/* Dynamic Status Badge Column */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide",
                        user.status === "ACTIVE" &&
                          "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20",
                        user.status === "PENDING" &&
                          "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20",
                        user.status === "INACTIVE" &&
                          "bg-destructive/10 text-destructive dark:bg-destructive/20",
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          user.status === "ACTIVE" && "bg-emerald-500",
                          user.status === "PENDING" && "bg-amber-500",
                          user.status === "INACTIVE" && "bg-destructive",
                        )}
                      />
                      {user.status}
                    </span>
                  </td>

                  {/* Formatted Date Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground text-sm">
                    {formatDate(user.created_at)}
                  </td>

                  {/* Contextual Quick Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {/* View Action */}
                      <button
                        title="View Profile"
                        className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all"
                        onClick={() => console.log("View:", user.id)}
                      >
                        <Eye size={16} />
                      </button>

                      {/* Edit Action */}
                      <button
                        title="Edit User"
                        className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all"
                        onClick={() => console.log("Edit:", user.id)}
                      >
                        <Edit3 size={16} />
                      </button>

                      {/* Suspend/Activate Quick Toggle Action */}
                      <button
                        title={
                          user.status === "ACTIVE"
                            ? "Deactivate User"
                            : "Activate User"
                        }
                        className={cn(
                          "p-1.5 rounded-md hover:bg-accent transition-all",
                          user.status === "ACTIVE"
                            ? "text-amber-500 hover:bg-amber-500/10"
                            : "text-emerald-500 hover:bg-emerald-500/10",
                        )}
                        onClick={() => console.log("Toggle Status:", user.id)}
                      >
                        {user.status === "ACTIVE" ? (
                          <UserX size={16} />
                        ) : (
                          <UserCheck size={16} />
                        )}
                      </button>

                      <div className="h-4 w-px bg-border my-auto mx-1" />

                      {/* Critical Delete Action */}
                      <button
                        title="Delete User"
                        className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all"
                        onClick={() => console.log("Delete:", user.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
