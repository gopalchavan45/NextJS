"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PlanTrip from "@/components/PlanTrip";

export default function LayoutClientWrapper({ children }) {
  const [planOpen, setPlanOpen] = useState(false);

  return (
    <>
      <Navbar onPlanTrip={() => setPlanOpen(true)} />
      <PlanTrip isOpen={planOpen} onClose={() => setPlanOpen(false)} />
      {children}
    </>
  );
}