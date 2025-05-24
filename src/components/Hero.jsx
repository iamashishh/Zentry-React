import React, { useRef, useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [isLoading, setisLoading] = useState(true);
  const [hasClicked, sethasClicked] = useState(false);
  const [loadedVideos, setloadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVDRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVDClick = () => {
    sethasClicked(true);

    setcurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoaded = () => {
    setloadedVideos((prevCount) => prevCount + 1);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <div className="relative w-screen  h-dvh overflow-x-hidden ">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 "
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVDClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVDRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                autoPlay
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center "
                onLoadedData={handleVideoLoaded}
              />
            </div>
          </div>

          <video
            // ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            autoPlay
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center "
            onLoadedData={handleVideoLoaded}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            // autoPlay
            loop
            muted
            onLoadedData={handleVideoLoaded}
            className="absolute left-0 top-0 size-full object-cover object-center "
          />
        </div>
        
        <h1 className="special-font uppercase font-zentry  text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] absolute bottom-5 right-5 text-blue-75 z-40"
        >G<b>a</b>ming </h1>

        <div className="absolute left-0 top-0 z-40 size-full" >
            <div className="mt-24 px-5 sm:px-10 " >
                <h1 className="special-font text-blue-100 uppercase font-zentry font-black text-5xl  sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem];
  " >
                    redifi<b>n</b>e
                </h1>

                <p className="mb-5 max-w-64 font-robert-regular text-blue-100" >
                    Enter the Metagame Layer <br /> Unleash the Play Economy:
                </p>
                <Button id="watch-trailer" title="Watch Trailer" leftICon  />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
