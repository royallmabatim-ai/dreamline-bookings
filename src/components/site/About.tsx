import busInterior from "@/assets/bus-interior.jpg";

const stats = [
  { value: "150+", label: "Modern Buses" },
  { value: "50+", label: "Destinations" },
  { value: "1M+", label: "Happy Customers" },
  { value: "19+", label: "Years of Service" },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About Dreamline</h2>
          <p className="mt-5 text-muted-foreground">
            Since 2006, Dreamline has been a leading bus company in East Africa, offering reliable and
            comfortable transportation across Kenya, Uganda, and Tanzania. With a commitment to quality
            service, safety, and customer satisfaction, we have become the preferred choice for thousands of
            travelers.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our modern fleet of buses is equipped with comfortable seating, air conditioning, and
            entertainment systems to ensure a pleasant journey. We take pride in our punctuality,
            professional staff, and dedication to making every trip memorable.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src={busInterior}
          alt="Spacious interior of a Dreamline coach"
          loading="lazy"
          width={1280}
          height={960}
          className="rounded-2xl object-cover shadow-elegant"
        />
      </div>
    </section>
  );
}
