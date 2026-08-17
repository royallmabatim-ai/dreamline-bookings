import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const routes = [
  { from: "Nairobi", to: "Kampala", frequency: "Daily", duration: "12 hours", price: "KSH 2,500" },
  { from: "Mombasa", to: "Dar es Salaam", frequency: "Daily", duration: "8 hours", price: "KSH 1,800" },
  { from: "Nairobi", to: "Mombasa", frequency: "Multiple Daily", duration: "7 hours", price: "KSH 1,200" },
  { from: "Kampala", to: "Dar es Salaam", frequency: "3x Weekly", duration: "14 hours", price: "KSH 3,000" },
  { from: "Nairobi", to: "Kisumu", frequency: "Daily", duration: "6 hours", price: "KSH 1,000" },
  { from: "Nairobi", to: "Arusha", frequency: "Daily", duration: "5 hours", price: "KSH 1,500" },
];

export function PopularRoutes() {
  return (
    <section id="routes" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Popular Routes</h2>
          <p className="mt-3 text-muted-foreground">
            Explore our most traveled destinations across East Africa
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Card key={`${route.from}-${route.to}`} className="shadow-card transition-shadow hover:shadow-elegant">
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-semibold text-foreground">{route.from}</span>
                  <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-lg font-semibold text-foreground">{route.to}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-4 text-primary" aria-hidden />
                    {route.frequency}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-primary" aria-hidden />
                    {route.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xl font-bold text-primary">{route.price}</span>
                  <Button
                    size="sm"
                    className="bg-gradient-primary"
                    onClick={() =>
                      toast.success(`Booking request started: ${route.from} to ${route.to}`)
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
