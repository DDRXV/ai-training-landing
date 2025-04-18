import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <img src="/logo.png" alt="Dyyota logo" className="h-9" />

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {["Features", "Testimonials", "Enroll"].map((item) => (
              <NavigationMenuItem key={item}>
                <a href={`#${item.toLowerCase()}`}>
                  <NavigationMenuLink className={cn("font-medium")}>
                    {item}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href="#enroll">Get Started</a>
        </Button>
      </div>
    </header>
  );
}
