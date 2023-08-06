"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "@/components/TestimonialCard";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Temoignage() {
  const router = useRouter();
  const temoignages = useSelector((state) => Object.values(state.temoignage));

  const handleClick = () => {
    router.push("/temoignage-new");
  };

  return (
    <div>
      <Navigation />
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {temoignages.map(val=><TestimonialCard key={val.id} data={val} />)}
      </Carousel>
      <div className="text-center">
        <button onClick={handleClick} className="btn boutonBordure py-2 my-5">
          Ajouter un nouveau témoignage
        </button>
      </div>
      <Footer />
    </div>
  );
}
