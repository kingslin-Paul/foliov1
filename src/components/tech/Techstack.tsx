import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-600" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
  { name: "TypeScript", icon: "fas fa-code", color: "text-blue-500" },
  { name: "React", icon: "fab fa-react", color: "text-blue-400" },
  { name: "Angular", icon: "fab fa-angular", color: "text-red-500" },
  { name: "Next.js", icon: "fas fa-code", color: "text-gray-700" },
  { name: "Tailwind", icon: "fas fa-wind", color: "text-sky-400" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
];

function TechStack() {

  const boxRef = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
  gsap.fromTo(
    ".tech-icon",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".techstack",
        start: "top 20%",
        end: "bottom 90%",
        scrub: true, 
        markers: false,
      },
    }
  );

}, []);


  return (
    <section className="w-full h-[100vh] py-20 relative flex justify-center items-center bg-mildWhite techstack">
      <img className='absolute max-w-[400px] top-0 right-0 z-0' src='/assets/binary.png' />
      <img className='absolute max-w-[400px] bottom-0 left-0 z-0' src='/assets/binary-2.png' />
      <div>
      <h2 className="text-primaryColor mytech z-[1] text-center text-3xl md:text-5xl lg:text-7xl font-bold mb-10 lg:mb-14">
         My Tech Stack & Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-6 md:px-20 max-w-[1000px] mx-auto z-[1] relative">
        {techStack.map((tech, index) => (
          <div
            key={index}
            ref={(el) => {
              boxRef.current[index] = el;
            }}
            className="tech-icon size-20 md:size-[80px] lg:size-[95px] x:size-24 flex flex-col items-center justify-center rounded-xl shadow-lg bg-white dark:bg-[#2a2a2a] hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <i className={`${tech.icon} ${tech.color} text-3xl md:text-4xl lg:text-5xl x:text-5xl`}></i>
            <p className="mt-1 md:mt-2 text-sm text-gray-700 dark:text-gray-300 font-bold">{tech.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default TechStack;
