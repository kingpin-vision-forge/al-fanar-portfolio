"use client";
import dynamic from "next/dynamic";
import GradualBlur from "@/app/components/reactbits/GradualBlur";

const Silk = dynamic(() => import("@/app/components/reactbits/SilkBg"), {
  ssr: false,
});

export default function SiteBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 opacity-45">
        <Silk speed={5.5} scale={1.15} color="#7B7481" noiseIntensity={1.2} rotation={0.3} />
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="12rem"
        strength={3.2}
        divCount={8}
        curve="bezier"
        opacity={0.85}
        className="pointer-events-none"
      />
    </>
  );
}
