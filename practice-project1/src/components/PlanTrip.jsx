// components/PlanTrip.jsx
"use client";

import { useState, useEffect } from "react";

const DESTINATIONS = [
  "Santorini, Greece", "Bali, Indonesia", "Maldives",
  "Kyoto, Japan", "Marrakech, Morocco", "Goa, India", "Paris, France",
];

const TRIP_TYPES = [
  "Leisure & relaxation", "Adventure & trekking",
  "Honeymoon", "Family holiday", "Cultural experience",
];

const BUDGETS = ["Economy", "Comfort", "Luxury"];

const STEPS = ["Destination", "Dates", "Preferences"];

export default function PlanTrip({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState("Comfort");
  const [form, setForm] = useState({
    destination: "", tripType: "Leisure & relaxation",
    departure: "", returnDate: "", notes: "",
  });

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (step < STEPS.length - 1) { setStep(step + 1); return; }
    // final submit — connect to your API / booking flow here
    console.log({ ...form, travelers, budget });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0806]/88 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-[560px] bg-[#1a1510] border border-[#C9A84C]/25 p-10 animate-[fadeUp_0.35s_ease_both]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B6860] hover:text-[#E8DFD0] transition-colors text-lg leading-none"
        >
          ✕
        </button>

        {/* Header */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1">
          Wanderlux · Trip Planner
        </p>
        <h2 className="font-serif text-[1.8rem] font-normal text-[#F5F0E8] leading-tight mb-1">
          Plan your <em className="italic text-[#C9A84C]">perfect</em> journey
        </h2>
        <p className="text-[13px] font-light text-[#6B6860] leading-relaxed mb-6">
          Tell us your dream — we'll handle everything else.
        </p>

        {/* Step indicator */}
        <div className="flex mb-8">
          {STEPS.map((s, i) => (
            <button
              key={s}
              onClick={() => i < step && setStep(i)}
              className={`flex-1 pb-2 text-[10px] tracking-[0.1em] uppercase transition-all border-b
                ${i === step
                  ? "border-[#C9A84C] text-[#C9A84C]"
                  : i < step
                    ? "border-[#C9A84C]/40 text-[#C9A84C]/50 cursor-pointer"
                    : "border-[#6B6860]/30 text-[#6B6860]"
                }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* ── STEP 0: Destination ── */}
        {step === 0 && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">Where to?</label>
                <select
                  value={form.destination}
                  onChange={set("destination")}
                  className="bg-[#111009] border border-[#6B6860]/40 text-[#E8DFD0] px-3 py-2.5 text-[13px] font-light focus:border-[#C9A84C]/50 focus:outline-none appearance-none"
                >
                  <option value="">Select destination</option>
                  {DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">Trip type</label>
                <select
                  value={form.tripType}
                  onChange={set("tripType")}
                  className="bg-[#111009] border border-[#6B6860]/40 text-[#E8DFD0] px-3 py-2.5 text-[13px] font-light focus:border-[#C9A84C]/50 focus:outline-none appearance-none"
                >
                  {TRIP_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">Travelers</label>
              <div className="flex items-center gap-4 mt-1">
                <button
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-8 h-8 border border-[#6B6860]/40 text-[#E8DFD0] hover:border-[#C9A84C]/50 transition-colors flex items-center justify-center text-base"
                >−</button>
                <span className="text-base font-medium text-[#F5F0E8] w-6 text-center">{travelers}</span>
                <button
                  onClick={() => setTravelers(Math.min(20, travelers + 1))}
                  className="w-8 h-8 border border-[#6B6860]/40 text-[#E8DFD0] hover:border-[#C9A84C]/50 transition-colors flex items-center justify-center text-base"
                >+</button>
                <span className="text-[12px] text-[#6B6860] font-light">
                  {travelers === 1 ? "1 traveler" : `${travelers} travelers`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 1: Dates ── */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Departure date", key: "departure", type: "date" },
                { label: "Return date", key: "returnDate", type: "date" },
              ].map(({ label, key, type }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">{label}</label>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={set(key)}
                    className="bg-[#111009] border border-[#6B6860]/40 text-[#E8DFD0] px-3 py-2.5 text-[13px] font-light focus:border-[#C9A84C]/50 focus:outline-none [color-scheme:dark]"
                  />
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#6B6860] font-light mt-1">
              Flexible on dates? Leave blank and we'll suggest the best windows.
            </p>
          </div>
        )}

        {/* ── STEP 2: Preferences ── */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">Budget range</label>
              <div className="flex gap-2 mt-1">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`flex-1 py-2.5 text-[11px] tracking-[0.08em] uppercase transition-all border
                      ${budget === b
                        ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/6"
                        : "border-[#6B6860]/30 text-[#6B6860] hover:border-[#6B6860]/60"
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[0.12em] uppercase text-[#6B6860]">Special requests</label>
              <textarea
                value={form.notes}
                onChange={set("notes")}
                placeholder="Dietary needs, accessibility, anniversaries, anything..."
                rows={4}
                className="bg-[#111009] border border-[#6B6860]/40 text-[#E8DFD0] placeholder:text-[#3d3b38] px-3 py-2.5 text-[13px] font-light focus:border-[#C9A84C]/50 focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-[#6B6860]/20 my-6" />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => step === 0 ? onClose() : setStep(step - 1)}
            className="text-[12px] tracking-[0.1em] uppercase text-[#6B6860] hover:text-[#E8DFD0] transition-colors font-light"
          >
            ← {step === 0 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#C9A84C] text-[#0F0D0B] px-7 py-3 text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#d4b56a] transition-colors"
          >
            {step === STEPS.length - 1 ? "Submit Request →" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}