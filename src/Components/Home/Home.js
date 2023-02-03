import React, { useState } from "react";
import Camera from "../Camera/Camera";
import DragDropFiles from "../DragDropFiles/DragDropFiles";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";

import { useEffect } from "react";

export default function Home() {
  const [tracks, setTracks] = useState(null);
  // useEffect(() => {
  //   async function request_tracks() {
  //     const response = await fetch("http://localhost:5000/api/getTracks", {
  //       "Content-Type": "application/json",
  //       mode: "no-cors",
  //     });
  //     console.log("brrooooo");
  //     const data = await response.json();
  //     setTracks(data.data);
  //     console.log(tracks);
  //   }
  //   request_tracks();
  // }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <Camera></Camera>
      <DragDropFiles></DragDropFiles>
      <Footer></Footer>
    </div>
  );
}
