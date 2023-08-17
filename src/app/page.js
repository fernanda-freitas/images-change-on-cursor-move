"use client";
import { useState } from "react";
import Gallery from "../components/gallery";

export default function Home() {
  const items = [
    {
      cursor: "cursor01.jpeg",
      background: "background01.jpeg",
    },
    {
      cursor: "cursor02.jpeg",
      background: "background02.jpeg",
    },
  ];

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
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
