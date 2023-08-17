import Image from "next/image";

export default function Gallery({ item, cursor }) {
  return (
    // <>
    //   <div className="w-full h-full relative">
    //     <Image
    //       src={`/images/${item.cursor}`}
    //       width={300}
    //       height={200}
    //       className={`absolute z-10`}
    //       style={{ left: cursor.x, top: cursor.y }}
    //       alt="cursor image"
    //     />
    //   </div>
    //   <Image
    //     className="overflow-hidden"
    //     src={`/images/${item.background}`}
    //     alt="image"
    //     fill
    //   />
    // </>
    <div className="w-full h-screen">
      <div className="w-full h-full relative">
        <Image src={`/images/${item.background}`} alt="image" fill />
      </div>
      <Image
        src={`/images/${item.cursor}`}
        width={300}
        height={200}
        className={`absolute z-10`}
        style={{ left: cursor.x, top: cursor.y }}
        alt="cursor image"
      />
    </div>
  );
}
