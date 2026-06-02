"use client";
import {
  LayoutDashboard,
  BarChart3,
  FolderIcon,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn's standard utility for class merging
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { authService } from "@/services/auth.service";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: "Home",
      icon: Home,
      href: "/admin",
      active: pathname === "/admin",
    },
    {
      label: "Users",
      icon: LayoutDashboard,
      href: "/admin/users",
      active: pathname === "/admin/users",
    },
    {
      label: "Bookings",
      icon: BarChart3,
      href: "/admin/bookings",
      active: pathname === "/admin/bookings",
    },
    {
      label: "Categories",
      icon: FolderIcon,
      href: "/admin/categories",
      active: pathname === "/admin/categories",
    },
  ];

  const handleLogOut = async () => {
    await authService.logOut();
    router.replace("/login");
  };

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen bg-background border-r border-border px-3 py-4 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className,
      )}
    >
      {/* Header / Logo Section */}
      <div
        className={cn(
          "flex items-center mb-8 px-2",
          isCollapsed ? "justify-center" : "justify-between",
        )}
      >
        {!isCollapsed && (
          <span className="font-bold text-xl tracking-tight text-foreground animate-fade-in">
            Dash<span className="text-primary">board</span>
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors group relative",
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Icon size={20} className="shrink-0" />

              {/* Text Label */}
              <span
                className={cn(
                  "transition-opacity duration-200",
                  isCollapsed
                    ? "opacity-0 pointer-events-none absolute"
                    : "opacity-100",
                )}
              >
                {item.label}
              </span>

              {/* Tooltip on Hover when Collapsed */}
              {isCollapsed && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-popover text-popover-foreground text-xs font-semibold drop-shadow-md opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all z-50 pointer-events-none whitespace-nowrap border border-border">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile Section */}
      <div className="border-t border-border pt-4">
        <button
          onClick={handleLogOut}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors group relative",
          )}
        >
          <LogOut size={20} className="shrink-0" />
          <span
            className={cn(
              "transition-opacity duration-200",
              isCollapsed
                ? "opacity-0 pointer-events-none absolute"
                : "opacity-100",
            )}
          >
            Logout
          </span>

          {isCollapsed && (
            <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-destructive text-destructive-foreground text-xs font-semibold drop-shadow-md opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all z-50 pointer-events-none whitespace-nowrap">
              Logout
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
