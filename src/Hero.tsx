import heroimg from './assets/mariya.png'
import signlogo from './assets/siglogo.png'
import sideLogo from './assets/side_logo.png'
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#f54a30] min-h-screen">
      
      {/* Left Side: Image */}
      <div className="relative md:w-1/2 flex justify-center h-full">
      
        <img 
          src={heroimg} 
          alt="Marion holding products" 
          className="h-full object-cover"
        />
      </div>
      <div className=' text-blue absolute flex justify-start top-2 lg:top-6 left-2 lg:left-10 border-3 border-blue-500'>
        <img src={sideLogo} alt="" className='text-amber-200 w-[120px] lg:w-[150px]' />
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Hello & Welcome!
        </h1>

        <div className="w-[70%] space-y-6">
        <p className="text-white leading-relaxed">
          Wow... 15 years of Marion’s Kitchen in Aussie pantries. 
          I’m honestly pinching myself! I’m so grateful for all the love 
          and support you’ve shown me over the years. It truly means the world.
        </p>

        <p className="text-white leading-relaxed">
          To celebrate, I’ve created a one-off <strong>15 Years Marion’s Kitchen Club</strong>. 
          Think of it as my birthday party, and you’re right at the top of the guest list.🎉 <br /> 
          You’ll find all the details below on how to apply.
        </p>

        <p className="italic text-white">
          Wishing you the best of luck — and from the bottom of my heart, thank you for being part of this journey.
        </p>
        </div>

        
        {/* Signature */}
        <div className="mt-4 w-[100px]">
            <img src={signlogo} alt="" />
        </div>

        {/* Buttons */}
        <div className="space-x-4 flex">
          <button className="flex justify-center items-center bg-gradient-to-r from-yellow-200 to-yellow-950 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Join Now
            <IoIosArrowForward />
          </button>
          <button className="text-orange-500 bg-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition">
            Contact Support
          </button>
        </div>

        
      </div>
    </section>
  )
}

export default Hero
