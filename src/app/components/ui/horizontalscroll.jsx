import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/vcet.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/vcet.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/vcet.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/vcet.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/vcet.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/vcet.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/vcet.png",
    title: "Title 7",
    id: 7,
  },
];