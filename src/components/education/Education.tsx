import './education.css'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {

 useEffect(() => {
    gsap.fromTo(
      ".exp-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".experience",
          start: "top 60%",
          end: "bottom 70%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section className="w-full z-[2] relative py-5 lg:p-0 min-h-[100vh] flex flex-col justify-center items-center gap-10 bg-mildWhite experience rounded-b-[32px]">
        <div>
            <h2 className="text-primaryColor mytech z-[1] text-center text-3xl md:text-5xl lg:text-7xl font-bold mb-10 lg:mb-14">Professional Experience</h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 px-5'>
            <div className='exp-card flex flex-col max-w-xl bg-white text-black p-6 relative'>
                <img src='/assets/red-ribbon.png' className='w-[60px] md:w-[100px] absolute top-[-6px] md:top-[-11px] right-[-6px] md:right-[-11px]'/>
                <span className='text-xs font-medium md:text-sm xl:text-base'>Jul 2024 – Present</span>
                <span className='text-base font-medium md:text-xl xl:text-2xl'>Frontend Developer — Payfin</span>
                <p className='text-xs font-medium md:text-sm xl:text-base'>Fintech Product Company</p>
                <ul className="list-disc pl-4 text-xs md:text-sm xl:text-base mt-3 space-y-2">
                    <li>Developed client onboarding UIs with Angular & TypeScript, streamlining registration and KYC workflows.</li>
                    <li>Built admin portals for managing client access, approvals, and real-time data views.</li>
                    <li>Implemented dynamic, role-based UI logic using Angular for custom flows.</li>
                    <li>Integrated secure APIs, managed state with RxJS & Reactive Forms, optimized performance.</li>
                    <li>Collaborated with design & backend teams to enhance UX and maintain performance.</li>
                </ul>

            </div>

            <div className='exp-card flex flex-col max-w-xl bg-white text-black p-6 relative'>
                <img src='/assets/red-ribbon.png' className='w-[60px] md:w-[100px] absolute top-[-6px] md:top-[-11px] right-[-6px] md:right-[-11px]'/>
                <span className='text-xs font-medium md:text-sm xl:text-base'>Jun 2023 – Jan 2024</span>
                <span className='text-base font-medium md:text-xl xl:text-2xl'>Software Engineer — Greenmen Consulting</span>
                <ul className="list-disc pl-4 text-xs md:text-sm xl:text-base mt-3 space-y-2">
                    <li>Developed responsive web interfaces using React.js & Next.js for smooth UX.</li>
                    <li>Integrated REST APIs to fetch and display data with error handling & loading states.</li>
                    <li>Built reusable, modular components for a scalable and maintainable codebase.</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Education