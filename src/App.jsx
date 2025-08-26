import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const App = () => {

  let [showContent, setShowContent] = useState(false);
  useGSAP (() =>{
    const tl = gsap.timeline();

    tl.to('.vi-mask-group',{
      rotate: 10,
      duration: 2,
      ease: 'power4.easeinOut',
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group',{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'expo.inOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function(){
        if (this.progress() >= .7) {
          document.querySelector('.svg').remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  return (
    <>
      <div className='svg fixed top-0 left-0 z-50   w-full h-screen overflow-hidden bg-black text-white'>
       <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
         <mask id='viMask'>
          <rect width='100%' height='100%' fill='black'/>
          <g className='vi-mask-group'>
            <text
            x='48%'
            y='38%'
            fontSize='260'
            textAnchor='middle'
            fill='white'
            dominantBaseline='middle'
            >
             VI
            </text>
          </g>
         </mask>
        </defs>
        <image
         href='./bg.png'
         width='100%'
         height='100%'
         preserveAspectRatio='xMidYMid slice'
         mask='url(#viMask)'
        />
       </svg>
      </div>
      {showContent && (
       <div className='main w-full'>
        <div className='landing w-full h-screen bg-black'>
          <div className='navbar absolute z-20 top-0 left-0 py-10 px-10 w-full  bg-red-600'></div>
          <div className='imagediv relative overflow-hidden w-full h-screen '>
          <img src="./sky.png" alt="bg-image" className='absolute w-full h-full object-cover ' />
           <img src="./bg.png" alt="bg-image" className='absolute w-full h-full object-cover' />
           <img src="./girlbg.png" alt="" className='absolute  -bottom-[30%] left-[30%] -translate-x-1/6 scale-[1.3] object-cover'/>
          </div>
        </div>

       </div>
      )
      }
    </>
  )
}

export default App
