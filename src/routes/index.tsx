import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Header, PHONE_RAW } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { PopularRoutes } from "@/components/site/Routes";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreamline | Bus Booking Across Kenya, Uganda & Tanzania" },
      {
        name: "description",
        content:
          "Book Dreamline bus tickets online for comfortable, punctual travel across Kenya, Uganda and Tanzania. Popular routes, 24/7 support and free WiFi.",
      },
      { property: "og:title", content: "Dreamline | Book Your Journey Across East Africa" },
      {
        property: "og:description",
        content:
          "Reliable and comfortable Dreamline bus travel across Kenya, Uganda and Tanzania. Search routes and book in a few clicks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <PopularRoutes />
        <About />
        <Contact />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Hello! I'd like to inquire about your bus services.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Dreamline on WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>
    </div>
  );
}
