import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import "./testimonial.css";

const TestimonialCard = ({ data, onEdit }) => {
  return (
    <div>
      <Image src="/avatar.png" alt="profile_picture" roundedCircle fluid />
      <div className="myCarousel">
        <h3>{data.nom}</h3>
        <h4>{data.profession}</h4>
        <p>{data.description}</p>
        <Link
          href={{
            pathname: "/temoignage-new",
            query: { id: data.id },
          }}
          className="btn boutonUpdate py-2"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
