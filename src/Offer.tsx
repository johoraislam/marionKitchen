import starimg from "./assets/star.png";
import riceCooker1 from "./assets/riceCooker1.png";
import pan2 from "./assets/pan2.png";
import pan3 from "./assets/pan3.png";
import cooker4 from "./assets/cooker4.png";
import pan5 from "./assets/pan5.png";
import cooker6 from "./assets/cooker6.png";
import blender7 from "./assets/blender7.png";
import cookingProduct8 from "./assets/cookingProduct8.png";

const prizes = [
  {
    id: 1,
    img: riceCooker1,
    title: "Panasonic Rice Cooker SR-DA152WST",
    subtitle: "Perfect rice every time",
  },
  {
    id: 2,
    img: pan2,
    title: "MAKO Black Steel 14” Wok Kit",
    subtitle: "Professional-grade wok cooking",
  },
  {
    id: 3,
    img: pan3,
    title: "MAKO Black Steel 14” Wok Kit",
    subtitle: "Professional-grade wok cooking",
  },
  {
    id: 4,
    img: cooker4,
    title: "MAKO Black Steel 14” Wok Kit",
    subtitle: "Professional-grade wok cooking",
  },
  {
    id: 5,
    img: pan5,
    title: "Panasonic Rice Cooker SR-DA152WST",
    subtitle: "Perfect rice every time",
  },
  {
    id: 6,
    img: cooker6,
    title: "MAKO Black Steel 14” Wok Kit",
    subtitle: "Professional-grade wok cooking",
  },
  {
    id: 7,
    img: blender7,
    title: "MAKO Black Steel 14” Wok Kit",
    subtitle: "Professional-grade wok cooking",
  },
  {
    id: 8,
    img: cookingProduct8,
    title: "Selection of Marion's Kitchen Food Products",
    subtitle: "Professional-grade wok cooking",
  },
];

const Offer = () => {
  return (
    <section className="bg-[#fdf2e9] min-h-screen flex flex-col items-center w-full mx-auto pb-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          What's on offer?
        </h2>
        <p className="text-gray-800 font-semibold">
          We're giving away prizes to{" "}
          <span className="font-bold text-orange-600">
            30 lucky participants!
          </span>
        </p>
      </div>

      <div>
        {/* Grand Prize Banner */}
        <div className="flex mb-8 w-full items-center justify-center">
          <div className="bg-orange-600 text-white flex items-center justify-center w-40 h-40 rounded-full relative z-10 -mr-6">
            <span className="text-8xl font-bold">5</span>
            <img
              src={starimg}
              alt="star"
              className="absolute -left-6 -top-8  size-32"
            />
          </div>

          <div className="bg-orange-600 flex justify-between items-center p-6 flex-1 h-24 ">
            <h3 className="text-3xl font-bold text-white">GRAND PRIZES</h3>
            <p className="text-white">
              Estimated Value: Over $700 AUD per winner
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-6 py-12 -mt-20">
          {/* Title */}
          <h2 className="text-2xl ml-28  md:text-3xl font-bold text-gray-900 mb-10">
            ULTIMATE COOKING EXPERIENCE
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
            {prizes.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 object-contain"
                />
                <h4 className="font-semibold mt-3">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
