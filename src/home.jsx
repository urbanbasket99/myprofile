export default function Home() {
  const services = [
    {
      title: "Restaurant Websites",
      icon: "🍽️",
      desc: "Premium restaurant websites for restaurants, cafes & cloud kitchens.",
    },
    {
      title: "Clinic Websites",
      icon: "🏥",
      desc: "Professional clinic & hospital websites with appointment options.",
    },
    {
      title: "Store Websites",
      icon: "🛒",
      desc: "Modern websites for stores, supermarkets & retail businesses.",
    },
    {
      title: "School Websites",
      icon: "🎓",
      desc: "Attractive websites for schools, colleges & tuition centers.",
    },
    {
      title: "Business Websites",
      icon: "💼",
      desc: "Premium websites for local businesses & companies.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-500/30">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div>
            <div className="flex gap-2 text-xs md:text-sm font-bold">
              <span className="border border-cyan-400 px-3 py-1 rounded-md text-cyan-400">
                CTRL
              </span>
              <span className="border border-cyan-400 px-3 py-1 rounded-md text-cyan-400">
                ALT
              </span>
              <span className="border border-cyan-400 px-3 py-1 rounded-md text-cyan-400">
                SHIFT
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mt-1 text-white">
              WEB STUDIO
            </h1>

            <p className="text-[12px] text-cyan-400">
              Transforming Businesses Digitally
            </p>
          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 font-medium text-gray-300">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>

            <a href="#portfolio" className="hover:text-cyan-400">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

         <a
  href="#contact"
  className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold hidden md:block"
>
  Get Quote
</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full text-sm">
              WE BUILD WEBSITES THAT GROW BUSINESSES
            </span>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mt-8">
              Modern Websites
              <br />
              for{" "}
              <span className="text-cyan-400">
                Growing Businesses
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-8">
              We create fast, mobile-friendly and premium websites
              that help businesses attract more customers and grow digitally.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
  href="#portfolio"
  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl font-bold text-black inline-block"
>
  View Portfolio
</a>

            <a
  href="https://wa.me/917396959547"
  target="_blank"
  rel="noreferrer"
  className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-8 py-4 rounded-2xl font-bold text-cyan-400 inline-block"
>
  Free Consultation
</a>
            </div>

            {/* STATS */}
            <div className="flex gap-8 mt-12 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">Fast</h3>
                <p className="text-gray-400">
                  Delivery
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[100px] rounded-full"></div>

            <div className="bg-zinc-950 border border-cyan-500/30 rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
                alt="Agency"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto py-24 px-6"
      >
        <div className="text-center mb-16">
          <p className="drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] uppercase tracking-[4px]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Web Solutions for Every Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* PORTFOLIO */}
<section
  id="portfolio"
  className="bg-zinc-950 py-24 px-6"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-cyan-400 uppercase tracking-[4px]">
        Our Portfolio
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Recent Projects
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* PROJECT 1 */}
      <div className="bg-black border border-cyan-500/20 rounded-[35px] overflow-hidden hover:border-cyan-400 transition">

        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
          alt="Restaurant Website"
          className="w-full h-[320px] object-cover"
        />

        <div className="p-8">
          <span className="text-cyan-400 text-sm uppercase">
            Restaurant Website
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Royal Spice Biryani
          </h3>

          <p className="text-gray-400 mt-4 leading-7">
            A premium luxury restaurant website with
            modern UI, gallery, testimonials and
            WhatsApp ordering system.
          </p>

          <a
  href="https://royal-biryani-gray.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="mt-6 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl text-black font-bold inline-block"
>
  View Project
</a>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="bg-black border border-cyan-500/20 rounded-[35px] overflow-hidden hover:border-cyan-400 transition">

        <img
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop"
          alt="Hospital Website"
          className="w-full h-[320px] object-cover"
        />

        <div className="p-8">
          <span className="text-cyan-400 text-sm uppercase">
            Hospital Website
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Trident Hospital
          </h3>

          <p className="text-gray-400 mt-4 leading-7">
            A modern hospital website featuring
            doctor profiles, appointments,
            services and emergency contact support.
          </p>

          <a
  href="https://trident-hospitals.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="mt-6 border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl text-cyan-400 font-bold inline-block"
>
  View Project
</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHY CHOOSE US */}
<section className="max-w-7xl mx-auto py-24 px-6">
  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[4px]">
      Why Choose Us
    </p>

    <h2 className="text-5xl font-bold mt-4">
      We Build Premium Digital Experiences
    </h2>
  </div>

  <div className="grid md:grid-cols-4 gap-6">
    {[
      "Premium Design",
      "Mobile Responsive",
      "Fast Delivery",
      "Affordable Pricing",
    ].map((item, index) => (
      <div
        key={index}
        className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 text-center"
      >
        <div className="text-4xl mb-4">⚡</div>

        <h3 className="text-xl font-bold">
          {item}
        </h3>
      </div>
    ))}
  </div>
</section>

{/* TESTIMONIALS */}
<section className="bg-zinc-950 py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    <p className="text-cyan-400 uppercase tracking-[4px]">
      Testimonials
    </p>

    <h2 className="text-5xl font-bold mt-4 mb-14">
      What Clients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Amazing premium website. Very professional service.",
        "Highly recommended for local business websites.",
        "Fast delivery and modern design quality.",
      ].map((review, index) => (
        <div
          key={index}
          className="bg-black border border-cyan-500/20 rounded-[30px] p-8"
        >
          <div className="text-cyan-400 text-2xl mb-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-400 leading-7">
            {review}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="max-w-5xl mx-auto py-24 px-6 text-center"
>
  <p className="text-cyan-400 uppercase tracking-[4px]">
    Contact Us
  </p>

  <h2 className="text-5xl font-bold mt-4">
    Let’s Build Your Website
  </h2>

  <p className="text-gray-400 mt-6 text-lg">
    Ready to grow your business online?
    Contact CtrlAltShift Web Studio today.
  </p>

  <div className="flex justify-center gap-4 mt-10 flex-wrap">
<a
  href="https://wa.me/917396959547"
  target="_blank"
  rel="noreferrer"
  className="bg-green-500 hover:bg-green-400 px-8 py-4 rounded-2xl font-bold text-black inline-block"
>
  WhatsApp Us
</a>

<a
  href="https://wa.me/917396959547"
  target="_blank"
  rel="noreferrer"
  className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-8 py-4 rounded-2xl font-bold text-cyan-400 inline-block"
>
  Free Consultation
</a>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-cyan-500/20 py-10 text-center text-gray-500">
 <div className="flex justify-center gap-6 text-2xl mb-4">
  <a href="https://facebook.com" target="_blank">📘</a>

  <a href="https://instagram.com" target="_blank">📷</a>

  <a href="https://linkedin.com" target="_blank">💼</a>
</div>

  <h3 className="text-xl font-bold text-white">
    CtrlAltShift Web Studio
  </h3>

  <p className="text-cyan-400 mt-2">
    Transforming Businesses Digitally
  </p>

  <p className="mt-4 text-sm">
    © 2026 CtrlAltShift Web Studio.
    All Rights Reserved.
  </p>
</footer>
    </div>
  );
}