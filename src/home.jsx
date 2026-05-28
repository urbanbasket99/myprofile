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
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

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

            <h1 className="text-3xl md:text-4xl tracking-wide font-bold mt-1 text-white">
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
      <section className="min-h-screen flex items-center pt-40 pb-16 px-6">
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
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
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
            <div className="absolute w-[450px] h-[450px] bg-cyan-500/40 blur-[180px] rounded-full animate-pulse"></div>

            <div className="bg-zinc-950 border border-cyan-500/30 rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
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
      {/* PROJECT 3 */}
      <div className="bg-black border border-cyan-500/20 rounded-[35px] overflow-hidden hover:border-cyan-400 transition">

            <img
           src="/urbanbasket.png"
            alt="Urban Basket"
            className="w-full h-[320px] object-cover rounded-t-[35px]"
            />

           <div className="p-8">
            <span className="text-cyan-400 text-sm uppercase">
            Ecommerce Website
            </span>

            <h3 className="text-3xl font-bold mt-3">
            Urban Basket
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
           A premium grocery eCommerce website with product browsing, cart, orders, admin dashboard, and smooth online shopping experience.
           </p>

           <a
            href="https://urban-basket-1-dzt0.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl text-cyan-400 font-bold inline-block"
              > 
              View Project
              </a>
        </div>
      </div>
      {/* PROJECT 4 */}
      <div className="bg-black border border-cyan-500/20 rounded-[35px] overflow-hidden hover:border-cyan-400 transition">

            <img
           src="/divine-pooja-store.png"
            alt="Urban Basket"
            className="w-full h-[320px] object-cover rounded-t-[35px]"
            />

           <div className="p-8">
            <span className="text-cyan-400 text-sm uppercase">
           Pooja Store
            </span>

            <h3 className="text-3xl font-bold mt-3">
            Divine Pooja Store
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
           A premium devotional eCommerce-style website designed for pooja stores, featuring WhatsApp ordering, featured products, festival specials, testimonials, and a premium traditional UI.
           </p>

           <a
            href="https://divine-pooja-store.vercel.app/"
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
{/* OUR PROCESS */}
<section className="max-w-7xl mx-auto py-24 px-6">
  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[4px]">
      Our Process
    </p>

    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
      Simple Process, Powerful Results
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      We follow a clear step-by-step process to build premium
      websites that help businesses grow online.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-8">

    {/* STEP 1 */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 text-center hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto text-4xl mb-6">
        💬
      </div>

      <span className="text-cyan-400 text-sm font-bold">
        STEP 01
      </span>

      <h3 className="text-2xl font-bold mt-3 mb-4">
        Discussion
      </h3>

      <p className="text-gray-400 leading-7">
        We understand your business, goals and website requirements.
      </p>
    </div>

    {/* STEP 2 */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 text-center hover:border-cyan-400 transition hover:-translate-y-2">
      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto text-4xl mb-6">
        🎨
      </div>

      <span className="text-cyan-400 text-sm font-bold">
        STEP 02
      </span>

      <h3 className="text-2xl font-bold mt-3 mb-4">
        Design
      </h3>

      <p className="text-gray-400 leading-7">
        We create a premium design tailored to your business brand.
      </p>
    </div>

    {/* STEP 3 */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 text-center hover:border-cyan-400 transition hover:-translate-y-2">
      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto text-4xl mb-6">
        💻
      </div>

      <span className="text-cyan-400 text-sm font-bold">
        STEP 03
      </span>

      <h3 className="text-2xl font-bold mt-3 mb-4">
        Development
      </h3>

      <p className="text-gray-400 leading-7">
        We build a fast, responsive and premium website experience.
      </p>
    </div>

    {/* STEP 4 */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[30px] p-8 text-center hover:border-cyan-400 transition hover:-translate-y-2">
      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center mx-auto text-4xl mb-6">
        🚀
      </div>

      <span className="text-cyan-400 text-sm font-bold">
        STEP 04
      </span>

      <h3 className="text-2xl font-bold mt-3 mb-4">
        Launch
      </h3>

      <p className="text-gray-400 leading-7">
        Your website goes live and starts attracting more customers.
      </p>
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
{/* TESTIMONIALS */}
<section className="bg-zinc-950 py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    <p className="text-cyan-400 uppercase tracking-[4px]">
      Testimonials
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-14">
      What Our Clients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* TESTIMONIAL 1 */}
      <div className="bg-black border border-cyan-500/20 rounded-[30px] p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="client"
            className="w-16 h-16 rounded-full object-cover border border-cyan-500"
          />

          <div className="text-left">
            <h3 className="font-bold text-lg">
              Ravi Kumar
            </h3>

            <p className="text-cyan-400 text-sm">
              Restaurant Owner
            </p>
          </div>
        </div>

        <div className="text-yellow-400 mb-4 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-400 leading-8 text-left">
          CtrlAltShift Web Studio created an amazing
          restaurant website for us. It looks premium
          and helped us present our business professionally.
        </p>
      </div>

      {/* TESTIMONIAL 2 */}
      <div className="bg-black border border-cyan-500/20 rounded-[30px] p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] hover:-translate-y-2">

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="client"
            className="w-16 h-16 rounded-full object-cover border border-cyan-500"
          />

          <div className="text-left">
            <h3 className="font-bold text-lg">
              Dr. Anita Reddy
            </h3>

            <p className="text-cyan-400 text-sm">
              Clinic Owner
            </p>
          </div>
        </div>

        <div className="text-yellow-400 mb-4 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-400 leading-8 text-left">
          Professional team and fast delivery.
          The website design improved our clinic’s
          online presence and trust.
        </p>
      </div>

      {/* TESTIMONIAL 3 */}
      <div className="bg-black border border-cyan-500/20 rounded-[30px] p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/67.jpg"
            alt="client"
            className="w-16 h-16 rounded-full object-cover border border-cyan-500"
          />

          <div className="text-left">
            <h3 className="font-bold text-lg">
              Suresh Patel
            </h3>

            <p className="text-cyan-400 text-sm">
              Business Owner
            </p>
          </div>
        </div>

        <div className="text-yellow-400 mb-4 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-400 leading-8 text-left">
          Highly recommended for business websites.
          Clean design, smooth communication and
          premium quality work.
        </p>
      </div>
    </div>
  </div>
</section>
{/* PRICING */}
<section className="max-w-7xl mx-auto py-24 px-6">
  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[4px]">
      Pricing Plans
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Affordable Website Packages
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Premium website solutions for businesses of all sizes.
      Transparent pricing with modern design and mobile responsiveness.
    </p>
    <p className="text-cyan-400 mt-3 text-sm">
  ✔ No hidden charges • ✔ Fast delivery • ✔ WhatsApp support
</p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* BASIC */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[35px] p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <h3 className="text-2xl font-bold mb-4">
        Basic Website
      </h3>

      <p className="text-gray-400 mb-6">
        Best for small local businesses
      </p>

      <h2 className="text-5xl font-bold text-cyan-400 mb-8">
        ₹3,999
      </h2>

      <ul className="space-y-4 text-gray-300">
        <li>✅ Single Page Website</li>
        <li>✅ Mobile Responsive</li>
        <li>✅ WhatsApp Integration</li>
        <li>✅ Contact Form</li>
        <li>✅ Fast Delivery</li>
      </ul>

      <a
        href="https://wa.me/917396959547"
        target="_blank"
        rel="noreferrer"
        className="mt-8 block text-center bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-bold"
      >
        Get Started
      </a>
    </div>

    {/* BUSINESS */}
    <div className="bg-cyan-500 text-black rounded-[35px] p-8 scale-105 shadow-[0_0_40px_rgba(34,211,238,0.25)]">

      <span className="bg-black text-cyan-400 px-4 py-2 rounded-full text-sm font-bold">
        MOST POPULAR
      </span>

      <h3 className="text-2xl font-bold mt-6 mb-4">
        Business Website
      </h3>

      <p className="mb-6">
        Ideal for restaurants, clinics & stores
      </p>

      <h2 className="text-5xl font-bold mb-8">
        ₹6,999
      </h2>

      <ul className="space-y-4">
        <li>✅ Multi Page Website</li>
        <li>✅ Premium Design</li>
        <li>✅ Mobile Responsive</li>
        <li>✅ WhatsApp Integration</li>
        <li>✅ Contact Form</li>
        <li>✅ Basic SEO</li>
      </ul>

      <a
        href="https://wa.me/917396959547"
        target="_blank"
        rel="noreferrer"
        className="mt-8 block text-center bg-black text-cyan-400 py-4 rounded-2xl font-bold"
      >
        Get Started
      </a>
    </div>

    {/* PREMIUM */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[35px] p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <h3 className="text-2xl font-bold mb-4">
        Premium Website
      </h3>

      <p className="text-gray-400 mb-6">
        Advanced business websites
      </p>

      <h2 className="text-5xl font-bold text-cyan-400 mb-8">
        ₹12,999
      </h2>

      <ul className="space-y-4 text-gray-300">
        <li>✅ Custom Design</li>
        <li>✅ Admin Dashboard</li>
        <li>✅ Booking / Orders</li>
        <li>✅ Advanced Features</li>
        <li>✅ Premium Support</li>
      </ul>

      <a
        href="https://wa.me/917396959547"
        target="_blank"
        rel="noreferrer"
        className="mt-8 block text-center bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-bold"
      >
        Get Started
      </a>
    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
  <div className="bg-cyan-500 rounded-[40px] p-12 text-center text-black">

    <h2 className="text-4xl md:text-6xl font-bold">
      Ready To Grow Your Business?
    </h2>

    <p className="mt-4 text-lg">
      Let’s build a premium website that attracts more customers.
    </p>

    <a
      href="https://wa.me/917396959547"
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-8 bg-black text-cyan-400 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
    >
      Get Free Consultation
    </a>
  </div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="max-w-7xl mx-auto py-24 px-6"
>
  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[4px]">
      Contact Us
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Let’s Build Your Website
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Ready to grow your business online?
      Contact CtrlAltShift Web Studio today
      for a free consultation.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT INFO */}
    <div>
      <div className="space-y-8">

        <div className="bg-zinc-950 border border-cyan-500/20 rounded-[25px] p-6">
          <h3 className="text-xl font-bold text-cyan-400">
            📞 Call / WhatsApp
          </h3>

          <p className="text-gray-300 mt-2">
            +91 7396 9595 47
          </p>
        </div>

        <div className="bg-zinc-950 border border-cyan-500/20 rounded-[25px] p-6">
          <h3 className="text-xl font-bold text-cyan-400">
            📧 Email
          </h3>

          <p className="text-gray-300 mt-2">
            ctrlaltshiftwebstudio@gmail.com
          </p>
        </div>

        <div className="bg-zinc-950 border border-cyan-500/20 rounded-[25px] p-6">
          <h3 className="text-xl font-bold text-cyan-400">
            📍 Location
          </h3>

          <p className="text-gray-300 mt-2">
            Hyderabad, Telangana
          </p>
        </div>
      </div>
    </div>

    {/* CONTACT FORM */}
    <div className="bg-zinc-950 border border-cyan-500/20 rounded-[35px] p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

      <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const business = e.target.business.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hello CtrlAltShift Web Studio!%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Business Type: ${business}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/917396959547?text=${whatsappMessage}`,
      "_blank"
    );
  }}
>

  <div>
    <label className="block text-gray-300 mb-2">
      Full Name
    </label>

    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
      className="w-full bg-black border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
    />
  </div>

  <div>
    <label className="block text-gray-300 mb-2">
      Phone Number
    </label>

    <input
      type="text"
      name="phone"
      placeholder="Enter your phone number"
      required
      className="w-full bg-black border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
    />
  </div>

  <div>
    <label className="block text-gray-300 mb-2">
      Business Type
    </label>

    <select
      name="business"
      required
      className="w-full bg-black border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
    >
      <option value="">
        Select Business Type
      </option>
      <option>Restaurant</option>
      <option>Clinic</option>
      <option>Hospital</option>
      <option>Store</option>
      <option>School</option>
      <option>Other</option>
    </select>
  </div>

  <div>
    <label className="block text-gray-300 mb-2">
      Message
    </label>

    <textarea
      rows="4"
      name="message"
      placeholder="Tell us about your website requirements"
      required
      className="w-full bg-black border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:-translate-y-1"
  >
    Get Free Website Consultation
  </button>
</form>
    </div>
  </div>
</section>
<a
  href="https://wa.me/917396959547"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 p-5 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] text-3xl z-50 transition hover:scale-110"
>
  💬
</a>

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