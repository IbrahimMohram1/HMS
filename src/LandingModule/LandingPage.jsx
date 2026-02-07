import React from "react";
import Header from "./Header/Header";
import MostPopularAds from "./MostPopularAds/MostPopularAds";
import Houses from "./Houses/Houses";
import Hotels from "./Hotels/Hotels";
import Footer from "../Shared/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <MostPopularAds />
      <Houses />
      <Hotels />
      <Footer />
    </>
  );
}
