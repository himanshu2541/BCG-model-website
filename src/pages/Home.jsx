import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/benefit/Benefits";
import CaregiverShowcase from "../components/caregiver/CaregiverShowcase";
import Features from "../components/features/Features";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import StepsSection from "../components/steps/StepsSection";
import Footer from "../components/footer/Footer";
import Team from "../components/Team/Team";
import CaregiverForm from "../components/caregiver form/CaregiverForm";
import Mission from "../components/mission/Mission";

const Home = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <MaxWidthWrapper>
        <Benefits />
      </MaxWidthWrapper>
      <CaregiverShowcase />
      <div className="max-w-[1200px] mx-auto">
        <Features />
      </div>
      <MaxWidthWrapper>
        <StepsSection />
      </MaxWidthWrapper>
      <Team />
      <Mission />
      <CaregiverForm />
      <Footer />
    </>
  );
};

export default Home;
