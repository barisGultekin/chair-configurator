import { useRef, useEffect } from "react";

import PropTypes from "prop-types";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Home.scss";
import Footer from "../../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ contentSectionRef }) => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  const animationTextRef1 = useRef(null);
  const animationTextRef2 = useRef(null);
  const animationTextRef3 = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const videoDuration = 7; // Seconds
    const totalFrames = 120; // 25 FPS
    const frameDuration = videoDuration / totalFrames;

    const startFrame = 0;
    const endFrame = 120;
    const usableFrames = endFrame - startFrame;

    const scrollTrigger = gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top top",
          end: "+=10000", // Adjust scroll distance for a smooth transition
          scrub: 0.5,
          pin: true,
          pinSpacing: true, // Set to true to maintain layout continuity
          onUpdate: (self) => {
            const frame = startFrame + Math.floor(self.progress * usableFrames);

            if (frame < endFrame) {
              video.currentTime = frame * frameDuration;
            }

            // Animate text between specific frames
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

            if (frame >= 50 && frame <= 80) {
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

            if (frame >= 90 && frame <= 120) {
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
          onLeave: () => {
            // Hide or fade out video section smoothly
            gsap.to(videoSectionRef.current, { opacity: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            // Restore video section opacity when scrolling back
            gsap.to(videoSectionRef.current, { opacity: 1, duration: 0.5 });
          },
        },
      }
    );

    return () => scrollTrigger.kill();
  }, []);

  return (
    <div className="home">
      <div
        className="video-section"
        ref={videoSectionRef}
        style={{ opacity: 1 }}
      >
        <video
          ref={videoRef}
          src="/assets/animation.mp4"
          muted
          playsInline
          preload="auto"
          style={{ opacity: 1 }}
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
          <a href="/configurator">
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
