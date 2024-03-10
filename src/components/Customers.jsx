import React from 'react'

const Customers = () => {
  return (
    <div className='mt-28'>
        <div className='bg-[#1a1a1aff] w-[100vw] text-white flex flex-col justify-center items-center p-28'>
            <h1 className='font-bold text-8xl text-center p-3'>Real stories that reveal real success</h1>
            <h3 className='font-bold text-2xl text-center p-2'>Trusted by the most-loved retail stores near you</h3>
            <div className='flex flex-col p-12'>
                <div className='flex flex-row'>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>JPORGANICS</h1>
                    </div>
                    <div className='bg-white p-3 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>THE END</h1>
                    </div>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>E MART</h1>
                    </div>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>PRAKRITI FOOD</h1>
                    </div>
                </div>
                <div className='flex flex-row mt-5'>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>MYDESIGN</h1>
                    </div>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>MYDESIGNATION</h1>
                    </div>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>OXFORD STATIONERS</h1>
                    </div>
                    <div className='bg-white p-4 flex w-[22vw] rounded-full mr-2'>
                        <h1 className='font-bold text-xl text-center text-black'>INDIAN ROUTE</h1>
                    </div>
                </div>
            </div>
            <h3 className='font-semibold text-xl text-center'>Craft your own success storu with zakya</h3>
            <div className='absolute m-2 top-[51vw]'>
              <iframe width="560" className='rounded-full' height="315" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=n4k9FX9oyf7-8QUS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
        </div>
        <div className='bg-white h-[40vw]'>
            <div className='absolute top-[75vw] ml-[20%]'>
                <h1 className='font-bold text-6xl text-center'>Successful brands like yours that <span className='text-center block'>are growing with Zakya</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Customers;