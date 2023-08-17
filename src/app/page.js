"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Gallery from "../components/gallery";

export default function Home() {
  const items = [
    {
      cursor: "cursor01.jpg",
      background: "background01.jpeg",
    },
    {
      cursor: "cursor02.jpeg",
      background: "background02.jpeg",
    },
    {
      cursor: "cursor04.jpeg",
      background: "background03.jpeg",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [cursor, setCursor] = useState({ x: null, y: null });

  const handleMouse = (e) => {
    setCursor({ x: e.clientX - 250, y: e.clientY - 320 });
  };

  return (
    <main
      onMouseMove={handleMouse}
      className="flex flex-col w-full overflow-x-hidden"
    >
      {items.map((item, i) => {
        return <Gallery item={item} cursor={cursor} key={i}></Gallery>;
      })}
    </main>
  );
}
