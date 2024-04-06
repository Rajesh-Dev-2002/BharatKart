import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = (item) => setActiveIndex(item);
  const items = data.slice(1,40).map(
    (item) => <HomeSectionCard product={item} />
  );
  return (
    <div className="relative  border ">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          // autoPlay
          // autoPlayInterval={1000}
         
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      {activeIndex !== items.length-5 && 
        <Button
          className="z-50"
          variant="contained"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(20%) rotate(90deg)",
            bgcolor: "white",
          }}
          // color="white"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      }

     {activeIndex !==0 && <Button
        className="z-50"
        variant="contained"
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          transform: "translateX(0%) rotate(-90deg)",
          bgcolor: "white",
        }}
        // color="white"
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>}
    </div>
  );
};

export default HomeSectionCarousel;
