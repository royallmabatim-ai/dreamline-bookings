import { Clock, Headphones, Shield, Ticket, Sofa, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const busInterior = "/images/bus-interior.jpg";
const bookingOffice = "/images/booking-office.jpg";
const heroBus = "/images/hero-bus.jpg";

const items = [
  {
    icon: Clock,
    title: "On-Time Departure",
    text: "We value your time with punctual departures and arrivals",
    image: heroBus,
    alt: "Dreamline coach ready for departure",
  },
  { icon: Shield, title: "Safe Travel", text: "Your safety is our priority with well-maintained buses" },
  { icon: Headphones, title: "24/7 Support", text: "Round-the-clock customer support for your queries" },
  {
    icon: Ticket,
    title: "Easy Booking",
    text: "Book your tickets online in just a few clicks",
    image: bookingOffice,
    alt: "Dreamline booking office counter",
  },
  { icon: Wifi, title: "Free WiFi", text: "Stay connected throughout your journey" },
  {
    icon: Sofa,
    title: "Comfortable Seats",
    text: "Spacious and comfortable seating for long journeys",
    image: busInterior,
    alt: "Comfortable interior of a Dreamline coach",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose Dreamline?</h2>
          <p className="mt-3 text-muted-foreground">
            Experience the best in class bus travel with our premium services
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="overflow-hidden py-0 shadow-card transition-shadow hover:shadow-elegant">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-44 w-full object-cover"
                />
              ) : null}
              <CardContent className="p-6">
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
