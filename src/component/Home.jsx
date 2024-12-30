import React from 'react'
import './Home.css'
import Items from './Items'
import Restaurent from './Restaurent'

const restaurent = [1,1,1,1]
function Home() {
  return (
    <>
    <div className="bg-stone-950 text-white">
      <section className='banner z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center text-white'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5 [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]  md:text-2xl  '>NSR FOOD</p>
                <p className='z-10 text-grey-300 text-xl lg:text-4xl [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)] '>Taste the food,</p>

            </div>
            <div className='cover left-0 right-0 top-0'>
            <p className='text-2xl lg:text-6xl font-bold z-10 py-5 [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]  md:text-2xl  '>Food is art,</p>
            <p className='text-2xl lg:text-6xl font-bold z-10 py-5 [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]  md:text-2xl  '>and food is love</p>
            </div>
            <div className='fadout'>

            </div>
      </section>
      <section className='p-10 lg:py-10 lg:px-20'>
        <p className='font-semibold text-gray-400 text-2xl py-3 pb-10 bg-black'>Top Meals</p>
        <Items/>
      </section>
      <section className='px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>Order From our HandPicked Favorites</h1>
        <div>
          {
            restaurent.map((item)=><Restaurent/>)
          }
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
