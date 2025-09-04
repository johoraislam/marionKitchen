import bannerimg from './assets/banner2.png'

const HowToEnter = () => {
  return (
    <section className="bg-amber-700  flex flex-col">
      {/* Title Section
      <div className="flex flex-col justify-center items-center pt-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          How to enter?
        </h2>
        <p className="text-white text-sm md:text-base">
          Just follow the steps here and submit your entry.
        </p>
      </div> */}

      {/* Main Content */}
      <div className="flex">
        {/* Left Circles */}
        <div className="flex flex-col items-start  px-6 md:px-32 relative">
          {/* Step 1 */}
          <div className="bg-[#f7f2ed] w-64 h-64 rounded-full flex flex-col justify-center items-center text-center">
            <h3 className="text-[#c4492d] font-bold text-xl mb-2">STEP 1</h3>
            <h4 className="font-semibold mb-2">Fill out the form</h4>
            <p className="text-sm text-gray-700 px-4">
              Simply fill out our easy form below and read through the{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>{" "}
              carefully.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#f7f2ed] w-64 h-64 rounded-full flex flex-col justify-center items-center text-center self-center md:self-start  md:ml-56">
            <h3 className="text-[#c4492d] font-bold text-xl mb-2">STEP 2</h3>
            <h4 className="font-semibold mb-2">Answer the questions</h4>
            <p className="text-sm text-gray-700 px-4">
              Answer a few questions about your favorite dishes and cooking
              preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#f7edf5e1] w-64 h-64 rounded-full flex flex-col justify-center items-center text-center md:ml-10">
            <h3 className="text-[#c4492d] font-bold text-xl mb-2">STEP 3</h3>
            <h4 className="font-semibold mb-2">Submit Entry</h4>
            <p className="text-sm text-gray-700 px-4">
              Submit your answers and wait for the exciting results!
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={bannerimg}
            alt="banner"
            className=" w-[1000px] h-[1000px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToEnter;
