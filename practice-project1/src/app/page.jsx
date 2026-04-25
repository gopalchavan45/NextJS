// app/page.jsx (or pages/index.jsx)
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 
import PlanTrip from "@/components/PlanTrip"; 
const destinations = [
  {
    name: "Santorini",
    region: "Greece · Europe",
    price: "₹89,000",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjaXR5fGVufDB8fDB8fHww",
    span: true,
  },
  {
    name: "Bali",
    region: "Indonesia · Asia",
    price: "₹52,000",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
  {
    name: "Maldives",
    region: "Indian Ocean",
    price: "₹1,20,000",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
  },
  {
    name: "Kyoto",
    region: "Japan · Asia",
    price: "₹78,000",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
  },
  {
    name: "Marrakech",
    region: "Morocco · Africa",
    price: "₹64,000",
    img: "https://images.unsplash.com/photo-1761839258671-6495fdc188b3?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomePage() {
  const [planOpen, setPlanOpen] = useState(false);
  return (
    <main className="bg-[#0F0D0B] text-[#E8DFD0] font-sans mt-11 overflow-x-hidden">
      <PlanTrip isOpen={planOpen} onClose={() => setPlanOpen(false)} />
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-end p-12 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#0a0a08] to-[#0d1420]" />
        <div className="absolute inset-0 opacity-35">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/60 via-transparent to-transparent" />

        {/* Counter */}
        <div className="absolute top-12 right-12 text-right">
          <p className="font-serif text-5xl text-[#C9A84C] leading-none">147</p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6860] mt-1">
            Destinations
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 animate-[fadeUp_0.9s_0.2s_both]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Est. 2019 · Curated Travel Experiences
          </p>
          <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-normal leading-[1.05] text-[#F5F0E8]">
            Where will
            <br />
            your <em className="text-[#C9A84C]">story</em>
            <br />
            begin?
          </h1>
          <p className="mt-6 text-base font-light text-[#6B6860] max-w-md leading-relaxed">
            Handpicked journeys for those who seek more than a destination —
            they seek a feeling.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            
              <button onClick={() => setPlanOpen(true)} className="bg-[#C9A84C] text-[#0F0D0B] px-8 py-4 text-[13px] font-medium tracking-widest uppercase hover:bg-[#d4b56a] hover:-translate-y-0.5 transition-all">
                Explore Journeys
              </button>
            
            <button className="border border-[#E8DFD0]/40 text-[#E8DFD0] px-8 py-4 text-[13px] font-light tracking-widest uppercase hover:border-[#E8DFD0] hover:bg-[#E8DFD0]/5 transition-all">
              Watch Film
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-[#C9A84C] to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#6B6860] [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
      </section>

      <div className="h-px mx-12 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* ── DESTINATIONS ── */}
      <section className="py-24 px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-2">
              Handpicked for you
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#F5F0E8]">
              Iconic <em>escapes</em>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-[12px] tracking-[0.1em] uppercase text-[#C9A84C] border-b border-[#C9A84C]/40 pb-0.5 hover:border-[#C9A84C] transition-colors"
          >
            View all →
          </Link>
        </div>

        <div
          className="grid grid-cols-3 gap-3"
          style={{ gridTemplateRows: "auto auto" }}
        >
          {destinations.map((d, i) => (
            <div
              key={d.name}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "row-span-2 h-[500px]" : "h-[244px]"}`}
            >
              <Image
                src={d.img}
                alt={d.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">
                  {d.region}
                </p>
                <p className="font-serif text-xl text-[#F5F0E8] font-normal">
                  {d.name}
                </p>
                <p className="text-xs text-[#6B6860] mt-1">
                  From{" "}
                  <span className="text-[#E8DFD0] font-medium">{d.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px mx-12 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* ── WHY US ── */}
      <section className="py-24 px-12 bg-[#0c0a08]">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=700&q=80"
                alt="Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-[55%] h-[220px] border-4 border-[#0F0D0B]">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80"
                alt="Nature"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-8 -left-6 bg-[#C9A84C] text-[#0F0D0B] px-5 py-4 text-center">
              <span className="font-serif text-4xl font-bold block leading-none">
                12+
              </span>
              <span className="text-[9px] tracking-widest uppercase block mt-1">
                Years of craft
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
              Why Wanderlux
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#F5F0E8]">
              Travel that
              <br />
              <em>moves</em> you
            </h2>
            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  icon: "✦",
                  title: "Curated, not copied",
                  desc: "Every itinerary is crafted by on-ground experts — never templated, always tailored.",
                },
                {
                  icon: "◈",
                  title: "Transparent pricing",
                  desc: "No hidden charges. What you see is what you pay, with our best rate guarantee.",
                },
                {
                  icon: "◉",
                  title: "Always-on support",
                  desc: "A dedicated travel concierge available around the clock, wherever you are.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-9 h-9 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-sm shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#F5F0E8] mb-1">
                      {f.title}
                    </h4>
                    <p className="text-[13px] text-[#6B6860] font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px mx-12 bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 px-12 text-center">
        <p className="text-[#C9A84C] text-sm tracking-[4px] mb-6">★★★★★</p>
        <blockquote className="font-serif italic text-[clamp(1.3rem,3vw,2rem)] text-[#F5F0E8] max-w-2xl mx-auto leading-relaxed">
          "Wanderlux didn't just plan our honeymoon — they created a memory
          we'll carry forever."
        </blockquote>
        <cite className="block mt-6 text-[12px] tracking-[0.15em] uppercase text-[#C9A84C] not-italic">
          — Priya & Arjun Sharma, Bali 2024
        </cite>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 px-12 text-center overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0 opacity-12">
          <Image
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80"
            alt="cta bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Begin here
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-normal text-[#F5F0E8]">
            Your next <em className="text-[#C9A84C]">chapter</em>
            <br />
            awaits
          </h2>
          <div className="w-14 h-px bg-[#C9A84C] mx-auto my-8" />
          <p className="text-[#6B6860] text-base font-light max-w-md mx-auto leading-relaxed mb-10">
            Talk to a travel specialist and get a bespoke itinerary — no
            obligations, no rush.
          </p>
         
            <button onClick={() => setPlanOpen(true)} className="bg-[#C9A84C] text-[#0F0D0B] px-10 py-4 text-[13px] font-medium tracking-widest uppercase hover:bg-[#d4b56a] hover:-translate-y-0.5 transition-all">
              Plan My Journey →
            </button>
        
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <footer className="flex justify-between items-center px-12 py-6 border-t border-[#C9A84C]/20">
        <p className="font-serif text-[#F5F0E8]">
          Wander<em className="text-[#C9A84C]">lux</em>
        </p>
        <p className="text-[11px] text-[#6B6860] tracking-wider">
          © 2025 Wanderlux Travel Co.
        </p>
      </footer>
    </main>
  );
}
