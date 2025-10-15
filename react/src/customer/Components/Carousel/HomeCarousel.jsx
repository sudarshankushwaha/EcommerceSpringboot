import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();

  const items = homeCarouselData.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt=""
      onClick={() => navigate(item.path)}
      onDragStart={handleDragStart}
      role="presentation"
      className="cursor-pointer w-full object-cover"
      style={{
        height: "60vh",            // responsive height (60% of screen height)
        maxHeight: "600px",        // limit for very tall screens
        minHeight: "250px",        // ensure visibility on small devices
        borderRadius: "10px",
      }}
    />
  ));

  return (
    <div className="w-full">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2500}
        disableButtonsControls
        disableDotsControls={false}
      />
    </div>
  );
};

export default HomeCarousel;
