import { Bus, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Routes", href: "#routes" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const PHONE = "+254 782 539202";
export const PHONE_RAW = "254782539202";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-primary py-2.5 text-center text-sm text-primary-foreground">
        <span className="inline-flex items-center gap-2 font-medium">
          <Phone className="size-4" aria-hidden />
          Call now to book:
          <a href={`tel:${PHONE_RAW}`} className="font-bold tracking-wide underline-offset-4 hover:underline">
            {PHONE}
          </a>
        </span>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <Bus className="size-6" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-bold text-foreground">Dreamline</span>
              <span className="block text-xs text-muted-foreground">Travel with Comfort</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label="Call Dreamline"
              className="hidden size-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary sm:flex"
            >
              <Phone className="size-5" aria-hidden />
            </a>
            <Button variant="outline" size="sm" className="gap-2">
              <User className="size-4" aria-hidden />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
