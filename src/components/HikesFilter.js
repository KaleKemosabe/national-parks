import React from "react";
import Title from "./Title";
import Map from "../components/Map/Map";

export function HikesFilter() {
  
  return (
    <>
    <section className="filter-container">
      <Title title="Suomen kansallispuistot" />
    </section>
    <Map />
    </>
  );
};

export default HikesFilter;
