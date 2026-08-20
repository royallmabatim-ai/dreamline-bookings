import { useState } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBus from "@/assets/hero-bus.svg";

export function Hero() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to || !date) {
      toast.error("Please fill in departure, destination and travel date.");
      return;
    }
    toast.success(`Searching Dreamline buses from ${from} to ${to} on ${date}.`);
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroBus}
        alt="Dreamline luxury coach parked at a bus terminal at sunset"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold text-primary-foreground sm:text-6xl">
          Book Your Journey with Dreamline
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
          Reliable and comfortable bus travel across Kenya, Uganda &amp; Tanzania
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-card p-5 text-left shadow-elegant sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden /> From
              </Label>
              <Input
                id="from"
                placeholder="Departure City"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to" className="text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden /> To
              </Label>
              <Input
                id="to"
                placeholder="Destination City"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-muted-foreground">
                <CalendarDays className="size-4 text-primary" aria-hidden /> Travel Date
              </Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passengers" className="text-muted-foreground">
                <Users className="size-4 text-primary" aria-hidden /> Passengers
              </Label>
              <Input
                id="passengers"
                type="number"
                min={1}
                max={20}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-5 w-full bg-gradient-primary text-base">
            Book Now
          </Button>
        </form>
      </div>
    </section>
  );
}
