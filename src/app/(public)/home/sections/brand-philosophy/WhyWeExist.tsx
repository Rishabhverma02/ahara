import { IconCard } from "@/src/components";
import test from "@/src/assets/images/aharcutimg (1).png"
import React from "react";

export const WhyWeExist = () => {
  return (
    <>
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>WhyWeExist</div>

        <IconCard
          image={test}
          title="Porsche 911"
          subtitle="GT3 RS"
          description="Timeless, iconic and unapologetically analog — this Porsche 911 embodies the soul of Stuttgart’s finest era."
          tags={["Ice grey", "3.2s", "Manual"]}
        />
      </main>
    </>
  );
};
