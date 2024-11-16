import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Home.scss";
import Footer from "../../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ contentSectionRef }) => {
  const videoRef = useRef(null);
  const imageSectionRef = useRef(null);

  const animationTextRef1 = useRef(null);
  const animationTextRef2 = useRef(null);
  const animationTextRef3 = useRef(null);

  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Check screen width and select appropriate video
    const cdnVideo = "assets/animationOpt.mp4"; // Replace with your CDN MP4 URL
    setVideoSrc(cdnVideo);

    const video = videoRef.current;
    const videoDuration = 7;
    const totalFrames = 175;
    const frameDuration = videoDuration / totalFrames;

    const scrollTrigger = gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const frame = Math.floor(self.progress * totalFrames);
            video.currentTime = frame * frameDuration;

            if (frame >= 0 && frame <= 40) {
              gsap.to(animationTextRef1.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
              });
            } else {
              gsap.to(animationTextRef1.current, {
                opacity: 0,
                y: -50,
                duration: 0.5,
              });
            }

            if (frame >= 50 && frame <= 110) {
              gsap.to(animationTextRef2.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
              });
            } else {
              gsap.to(animationTextRef2.current, {
                opacity: 0,
                y: -50,
                duration: 0.5,
              });
            }

            if (frame >= 120 && frame <= totalFrames) {
              gsap.to(animationTextRef3.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
              });
            } else {
              gsap.to(animationTextRef3.current, {
                opacity: 0,
                y: -50,
                duration: 0.5,
              });
            }
          },
        },
      }
    );

    return () => scrollTrigger.kill();
  }, []);

  return (
    <div className="home">
      <div
        className="image-section"
        ref={imageSectionRef}
        style={{ opacity: 1 }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="text-overlay">
          <div className="animation-text-area" ref={animationTextRef1}>
            <h1>Mount Chair</h1>
          </div>
          <div className="animation-text-area" ref={animationTextRef2}>
            <h1>Chair at its peak.</h1>
          </div>
          <div className="animation-text-area" ref={animationTextRef3}>
            <h1>Comfort in details.</h1>
          </div>
        </div>
      </div>
      <div className="content-section" ref={contentSectionRef}>
        <div className="configure">
          <div className="header">
            <h1>Design it your way.</h1>
            <p>Create your tailor-made Mount Chair with our 3D configurator.</p>
          </div>
          <a href="/chair-configurator/#/configurator">
            <button>Go to configurator</button>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Home.propTypes = {
  contentSectionRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Home;
