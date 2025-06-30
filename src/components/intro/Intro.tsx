import gsap from 'gsap';
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const helloArray = [
  'Hello',
  'ನಮಸ್ಕಾರ',
  'வணக்கம்',
  'नमस्ते',
  'こんにちは',
  'Bonjour',
  'Hola',
];

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopFinished, setLoopFinished] = useState(false);

  function changeHeloOVer(){
    const tl=gsap.timeline({
      delay:1
    })
     tl.to('.dottext', {
    y: -50,
    opacity: 0,
    duration: 0.45,
    ease: 'power2.out',
  });

  tl.to('.dot', {
    y: -50,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out',
  }, "-=0.2");

  tl.to("#intro-black",{
    y:"-100%"
  })

    tl.to('#white-flash', {
      bottom: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  
  }
  useEffect(() => {
    if (!loopFinished) {
      if (currentIndex < helloArray.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 300);

        return () => clearTimeout(timeout);
      } else {
        // After last item, wait and reset to first
        const finalTimeout = setTimeout(() => {
          setCurrentIndex(0);
          setLoopFinished(true);
        }, 300);

        return () => clearTimeout(finalTimeout);
      }
    }
  }, [currentIndex, loopFinished]);

    useEffect(() => {
    if (loopFinished && currentIndex === 0) {
      const timer = setTimeout(() => {
        changeHeloOVer();
      }, 400); // short pause after 'Hello'
      return () => clearTimeout(timer);
    }
  }, [loopFinished, currentIndex]);

  return (
    <div >
      <div id="intro-black" className="w-full h-[100vh] flex items-center justify-center bg-mildBlack text-mildWhite text-2xl md:text-4xl font-mono">
        <span className='flex justify-start items-center gap-2 overflow-hidden'><div className='size-2.5 bg-mildWhite rounded-full dot'></div> <span className='dottext'>{helloArray[currentIndex]}</span></span>
      </div>
      <div id="white-flash" className="absolute bottom-[-100%] left-0 w-full h-[100vh] bg-mildWhite"></div>
    </div>

  );
}

export default Intro;


// import gsap from 'gsap';
// import React, { useEffect, useState } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// const helloArray = [
//   'Hello',
//   'ನಮಸ್ಕಾರ',
//   'வணக்கம்',
//   'नमस्ते',
//   'こんにちは',
//   'Bonjour',
//   'Hola',
// ];

// function Intro() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loopFinished, setLoopFinished] = useState(false);

//   function playFinalAnimation() {
//     const tl = gsap.timeline({ delay: 0.6 });

//     // Step 1: Animate text and dot upward
//     tl.to('.dottext', {
//       y: -50,
//       opacity: 0,
//       duration: 0.35,
//       ease: 'power2.out',
//     });

//     tl.to('.dot', {
//       y: -50,
//       opacity: 0,
//       duration: 0.3,
//       ease: 'power2.out',
//     }, "-=0.25");

//     // Step 2: Slide black screen up
//     tl.to("#intro-black", {
//       y: "-100%",
//       duration: 0.5,
//       ease: "power2.inOut",
//     });

//     // Step 3: Green panel rises from bottom
//     tl.to(".coverUp", {
//       y: "-100%",
//       duration: 0.5,
//       ease: "power2.inOut",
//     },"-=1");

//     // Step 4: White panel rises over green
//     tl.to("#white-flash", {
//       y: "0%",
//       duration: 0.5,
//       ease: "power2.inOut",
//     });


//   }

//   useEffect(() => {
//     if (!loopFinished) {
//       if (currentIndex < helloArray.length - 1) {
//         const timeout = setTimeout(() => {
//           setCurrentIndex((prev) => prev + 1);
//         }, 300);

//         return () => clearTimeout(timeout);
//       } else {
//         const finalTimeout = setTimeout(() => {
//           setCurrentIndex(0); // Show "Hello" again at end
//           setLoopFinished(true);
//         }, 300);

//         return () => clearTimeout(finalTimeout);
//       }
//     }

//     // Trigger exit animation once "Hello" is back
//     if (loopFinished && currentIndex === 0) {
//       const timer = setTimeout(() => {
//         playFinalAnimation();
//       }, 700); // Pause briefly before animating out
//       return () => clearTimeout(timer);
//     }

//   }, [currentIndex, loopFinished]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Main black screen with Hello animation */}
//       <div id="intro-black" className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#212121] text-[#DEDEDE] text-2xl md:text-4xl font-mono z-10">
//         <span className="flex items-center gap-2 overflow-hidden">
//           <div className="size-2.5 bg-[#DEDEDE] rounded-full dot"></div>
//           <span className="dottext">{helloArray[currentIndex]}</span>
//         </span>
//       </div>

//       {/* Green cover from bottom */}
//       <div className="coverUp absolute bottom-[-100%] left-0 w-full h-full bg-[#2A1B3D] z-20"></div>

//       {/* White flash cover */}
//       <div id="white-flash" className="absolute top-0 left-0 w-full h-full bg-white z-30" style={{ transform: 'translateY(-100%)' }}></div>
//     </div>
//   );
// }

// export default Intro;


