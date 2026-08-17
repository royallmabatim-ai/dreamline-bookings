import { Bus } from "lucide-react";
import { PHONE } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
              <Bus className="size-5" aria-hidden />
            </span>
            <span className="text-lg font-bold text-foreground">Dreamline</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Comfortable, safe and punctual bus travel across Kenya, Uganda and Tanzania.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { label: "Routes", href: "#routes" },
              { label: "Services", href: "#services" },
              { label: "About Us", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{PHONE}</li>
            <li>info@dreamline.com</li>
            <li>Nairobi CBD, Kenya</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Dreamline. All rights reserved.
      </p>
    </footer>
  );
}
