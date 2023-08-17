import Image from "next/image";

export default function Gallery({ item, cursor }) {
  return (
    <div className="w-100 h-screen clip-path">
      <div className="w-full h-full relative">
        <Image src={`/images/${item.background}`} alt="image" fill />
      </div>

      <div
        className="h-[420px] w-[544px] fixed top-0 rounded-2xl overflow-hidden"
        style={{ left: cursor.x, top: cursor.y }}
      >
        <Image
          src={`/images/${item.cursor}`}
          fill
          className={`w-100 object-cover`}
          alt="cursor image"
        />
      </div>
    </div>
  );
}
