
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg1 from '../assets/hero_img_1.jpg'
import heroImg2 from '../assets/hero_img_2.jpg'
import heroImg3 from '../assets/hero_img_3.jpg'
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      url: heroImg1,
      title: "Great things in business are never done by one person; they are done by a team of people.",
    },
    {
      url: heroImg2,
      title: "Adapting to change is the secret of survival in the oil and gas industry.",
    },
    {
      url: heroImg3,
      title: "Your vision, our expertise.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            {images[currentImageIndex].title}
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in">
            {images[currentImageIndex].description}
          </p>

      <div className="flex justify-center space-x-4 animate-fade-in">
  <Link to="/projects">
  <button className="border text-black border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors duration-200">
      Our Projects
    </button>
  </Link>

  <Link to="/contact">
  <button className="border text-black border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors duration-200">
  Contact Us
    </button>
  </Link>
</div>

        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
