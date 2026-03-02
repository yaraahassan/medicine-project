import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
<div className=' h-screen flex items-center  '>
    <div className='grid grid-cols-2 gap-6 '>
        <div className=' space-y-7 p-6 ml-70'>
            <h1 className='max-w-xl text-[#503217] text-4xl font-bold'>Your trusted care now and always</h1>
            <p className='text-[#8F7D6A] text-md'>
                For the best results, align your health needs with your medication plan.
            </p>
            <button className='bg-[#503217] text-white px-4 py-2'>shop now</button>
        </div>
        <div>
            <Image width={400} height={400}
            src="/amber-bottle-full-pills-sitting-table-with-blank-label-branding 1 (1).png"
            />
        </div>

    </div>
// </div>
  )
}
