import React from 'react'
import Navbar from './components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

import noob from "../public/bruce-mars-HHXdPG_eTIQ-unsplash.jpg"
import exp from "../public/sam-sabourin-Qu70BExHRkQ-unsplash.jpg"

export default function onboarding() {
  const categories = [
    {
      name: 'Beginner',
      image: noob,
      link: '/beginner'
    },
    {
      name: 'Experienced',
      image: exp,
      link: '/experienced'
    }
  ]
  return (
    <>
    <Navbar/>
    <div className={`resotho relative flex flex-col px-7 mb-10 items-center`}>
        <span className='text-center text-xl my-10'>What would you consider yourself?</span>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-x-20 gap-y-5'>
        {categories.map((category, index) => (
          <Link
          key={index}
          className='relative border-2 border-black md:h-[300px] md:w-[300px] group mt-5 rounded-[50px] md:rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500'
          href={category.link}>
            <Image className='h-full w-auto object-cover' src={category.image} alt={category.name} />
            <span className='flex items-center justify-center absolute backdrop-blur-[1px] font-sans uppercase font-bold text-4xl text-center bottom-0 w-full h-full my-auto text-white italic shadow-lg'>{category.name}</span>
          </Link>
        ))}
        </div>
      </div>
    </>
  )
}
