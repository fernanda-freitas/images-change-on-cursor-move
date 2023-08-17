import Image from "next/image";
import { motion, spring } from "framer-motion";

export default function Gallery({ item, cursor }) {
  return (
    <div className="w-100 h-screen clip-path">
      <div className="w-full h-full relative">
        <Image
          src={`/images/${item.background}`}
          alt="image"
          fill
          className="w-100 object-cover"
        />
      </div>

      <motion.div
        className="h-[620px] w-[520px] fixed top-0 rounded-2xl overflow-hidden"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{
          type: spring,
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <Image
          src={`/images/${item.cursor}`}
          fill
          className={`w-100 object-cover`}
          alt="cursor image"
        />
      </motion.div>
    </div>
  );
}
