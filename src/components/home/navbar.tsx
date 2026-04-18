import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/home/logo";
import { NavMenu } from "@/components/home/nav-menu";
import { NavigationSheet } from "@/components/home/navigation-sheet";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute inset-y-0 left-2.5 my-auto h-5 w-5" />
            <Input
              className="w-70 flex-1 rounded-full border-none bg-muted pl-10 shadow-none"
              placeholder="Search"
            />
          </div>
          <Button
            className="rounded-full bg-muted text-foreground shadow-none hover:bg-accent md:hidden"
            size="icon"
          >
            <Search className="h-5! w-5!" />
          </Button>
          <Button className="hidden sm:inline-flex" variant="outline" asChild>
            <Link href="/signIn">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signUp">Sign Up</Link>
          </Button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
