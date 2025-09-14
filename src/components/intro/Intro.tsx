import gsap from 'gsap';
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import './intro.css'
import TechStack from '../tech/Techstack';
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
  const [itemHeight, setItemHeight] = useState(60);


  const roles =[
    "Front-end Developer",
    "JavaScript & TypeScript",
    "React.js Developer",
    "UI/UX Explorer"
  ]

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

    tl.from('#white-flash', {
      bottom: "-100%",
      duration: 0.5,
      ease: 'power2.inOut',
    });

    tl.to("#typingImg",{
      scale:1,
      opacity:1,
      duration:0.7
    },"-=0.2")
    tl.to('#white-content', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });

  
  tl.call(() => {
    const total = roles.length;
    let current = 0;

    const animate = () => {
      gsap.to("#roleSlider", {
        y: -itemHeight * current, // assuming 60px height
        duration: 0.5,
        ease: "power2.inOut",
      });

      current = (current + 1) % total;
      setTimeout(animate, 2000); // 2s pause between roles
    };

    animate();
  },[],"-=1.5");

  tl.from(".menu-btn",{
    opacity:1,
  },)

  
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

  useEffect(() => {
  const updateItemHeight = () => {
    if (window.innerWidth <= 768) {
      setItemHeight(40);
    } else {
      setItemHeight(60);
    }
  };

  // Call on mount
  updateItemHeight();

  // Optional: Listen to window resize too
  window.addEventListener('resize', updateItemHeight);
  return () => window.removeEventListener('resize', updateItemHeight);
}, []);

useEffect(() => {
  const setVH = () => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  };
  setVH();
  window.addEventListener("resize", setVH);
  return () => window.removeEventListener("resize", setVH);
  // h-[calc(var(--vh)*100)]
}, []);


  return (
    <div >
      <div id="intro-black" className="w-full h-[100svh] z-[100] relative flex items-center justify-center bg-mildBlack text-mildWhite text-2xl md:text-4xl font-mono">
        <span className='flex justify-center items-center gap-2 overflow-hidden w-[300px]'><div className='size-2.5 bg-mildWhite rounded-full dot'></div> <span className='dottext'>{helloArray[currentIndex]}</span></span>
      </div>
      <div id="white-flash" className="absolute p-5 pt-16 bottom-0 z-[0] left-0 w-full h-[calc(var(--vh)*100)] flex items-center justify-center bg-mildWhite">
        <div className='flex justify-around items-center flex-col md:flex-row h-full  max-w-[1400px]'>
          <div id='white-content' className='opacity-0'>
          <span className="text-[28px] md:text-[32px] lg:text-5xl font-bold mb-2">
           <span className='text-secondaryColor'>Hi, I'm </span><span className="text-primaryColor font-onepiece uppercase text-[30px] md:text-4xl lg:text-6xl">Kingslin Paul</span>
          </span>
            <span className="text-secondaryColor text-[28px] md:text-[32px] lg:text-5xl font-bold mb-4 xl:mb-6">
              <div id="intro-role" className="h-[40px] lg:h-[60px] overflow-hidden">
                <div id="roleSlider" className="flex flex-col">
                  {roles.map((r, i) => (
                    <div key={i} className="h-[40px] lg:h-[60px] flex items-center">{r}</div>
                  ))}
                </div>
              </div>
            </span>
            <p className="text-lg font-medium text-ternaryColor md:text-xl xl:text-2xl max-w-xl">
              I craft modern web experiences using React.js, Tailwind CSS, and TypeScript. Passionate about clean UI, performance optimization, and seamless user interactions.
            </p>

        </div>
        <div id="typingImg" className="scale-150 opacity-0">
          <div className='absolute top-[7%] right-[6%]'>
            <div className='relative min-w-[100px] x:w-[150px]'>
              <img className='size-[100px] x:size-[150px] gear1 absolute' alt='gear1' src='/assets/gear1.png' />
              <img className='size-[100px] x:size-[150px] gear2 absolute top-[24px] x:top-[34px] left-[34px] x:left-[54px]' alt="gear2" src='/assets/gear1.png' />
            </div>
          </div>

          <img className='w-auto sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px]' src='/assets/codeimg.png' />
        </div>
        </div>
      </div>
      <div className='bg-[#a88ced] size-10 hover:size-11 opacity-0 transform transition-all duration-300 rounded-full fixed top-6 z-[50] right-9 menu-btn'>

      </div>
      
      <TechStack />
      <div className='w-full h-[100vh] bg-mildWhite flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
          <div className='relative'>
          <img className='absolute sun z-0 size-20 lg:size-24 lg:top-6 lg:left-6' src='/assets/sun.png' alt='sun' />
          <img className='relative z-10 w-[200px] lg:w-[300px]' src='/assets/underconstruction.png' alt='under-construction' />
          </div>
          <p>More content is on the way — this portfolio is actively being updated.</p>
        </div>
      </div>
    </div>

  );
}

export default Intro;
