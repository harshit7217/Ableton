import WallImage from "./../../public/wall.jpg";
import Learn from './../../public/music-learn.jpg';
import Class from './../../public/musci-class.jpg';

function Wall() {
  return (
    <div className="ml-4 ">
      <div className="relative w-full h-[49vw] sm:h-[49vw] md:h-[50vw] lg:h-[50vw] xl:h-[50vw]">
        <img
          className="absolute top-0 left-[23%] w-[49vw] sm:w-[49vw] md:w-[50vw] lg:w-[50vw] xl:w-[50vw]  h-auto"
          src={WallImage}
          alt="/"
        />
        <img
          className="absolute top-[6vh] sm:top-[10vh] md:top-[12vh] lg:top-[15vh] xl:top-[20vh] left-[3%] sm:left-[3%] md:left-[3%] lg:left-[3%] xl:left-[3%] w-[38vw] sm:w-[38vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw]  h-auto"
          src={Learn}
          alt="/"
        />
        <img
          className="absolute  top-[6vh] sm:top-[10vh] md:top-[12vh] lg:top-[15vh] xl:top-[20vh] left-[53%] sm:left-[53%] md:left-[53%] lg:left-[55%] xl:left-[55%] w-[38vw] sm:w-[38vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw]  h-auto"
          src={Class}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Wall;
