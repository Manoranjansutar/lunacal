import frame1 from "./assets/Frame 1000002294.png";
import React, { useState, useRef, useEffect } from "react";
import image from "./assets/img.svg";
import leftarrow from "./assets/Group 28.png";
import rightarrow from "./assets/Group 28 (1).png";
import add from "./assets/Group.png";
import line from "./assets/Rectangle 5158.png";
const App = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);
  const tabs = ["About Me", "Experiences", "Recommended"];
  const [images, setImages] = useState([1, 2, 3]);
  const galleryRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const activeTabElement = tabsRef.current[tabs.indexOf(activeTab)];
    if (activeTabElement) {
      setIndicatorStyle({
        width: `${activeTabElement.offsetWidth}px`,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddImage = () => {
    console.log("button clicked");
    setImages((prevImages) => [...prevImages, prevImages.length + 1]);
  };
 

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(checkScrollPosition, 300);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, [images]);

  return (
    <div className="relative">
      <div className="">
        <div className="container absolute btn-container">
          <div className="flex gap-8 p-2 mt-4">
            <img src={frame1} alt="" className="w-[24px] " />
            <div>
              <div className=" container1 btn-container">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className={`btn relative z-10 rounded-[16px]  ${
                      activeTab === tab ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                ))}
                <div
                  className="absolute transition-all duration-300 ease-out bg-[#28292F] top-7 left-1 w-[195px] h-[47px] btn-container box-shadow"
                  style={{
                    height: "51px",
                    ...indicatorStyle,
                  }}
                />
                <p className="mt-6 fs">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've
                  been working at this awesome company for 3 years now.
                </p>
                <p className="mt-6 fs">
                  I was born and raised in Albany, NY & have been living in
                  Santa Carla for the past 10 years my wife Tiffany and my 4
                  year old twin daughters - Emma and Ella. Both of them are just
                  starting school, so my calender is usually blocked between
                  9-10 AM. This is a...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[970px] top-[430px] flex justify-center">
          <img src={line} alt="" />
        </div>

        <div className="absolute mt-2 container2">
          <div className="flex gap-8 p-2 mt-4">
            <img src={frame1} alt="" className="w-[24px] " />
            <div className="w-[595px]">
              <div className="flex items-center justify-between ">
                <button className="text-white bg-black w-[149px] h-[62px] rounded-[20px]">
                  Gallery
                </button>
                <div className="flex items-center gap-4">
                  <button
                    className="text-white rounded-full add-btn w-[140px] h-[50px] flex items-center justify-center  gap-2"
                    onClick={handleAddImage}
                  >
                    {" "}
                    <img src={add} alt="" /> Add Image
                  </button>
                  <div
                    className={`arrow ${isAtStart ? "bg-[#96BEE7]" : ""}`}
                    onClick={() => {
                      scroll("left");
                    }}
                    disabled={isAtStart}
                  >
                    <img src={leftarrow} alt="" className="p-3" />
                  </div>
                  <div
                    className={`arrow ${isAtEnd ? "bg-[#96BEE7]" : ""}`}
                    onClick={() => {
                      scroll("right");
                    }}
                    disabled={isAtEnd}
                  >
                    <img src={rightarrow} alt="" className="p-3" />
                  </div>
                </div>
              </div>
              <div
                className="flex  gap-8 w-[595px] mt-8  no-scrollbar  overflow-x-auto"
                ref={galleryRef}
                style={{ scrollBehavior: "smooth" }}
              >
                {images.map((img) => (
                  <div
                    key={img}
                    className="flex-shrink-0 images"
                  >
                    <img src={`${image}`} className="w-[180px] h-[179px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[970px] top-[820px] flex justify-center">
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
