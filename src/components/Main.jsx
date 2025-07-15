import YellowBg from "./../../public/yellow-bg.jpg";
import BandImage from './../../public/band.jpg';
import PianoImage from './../../public/piano.jpg';
function Main() {
  return (
    <div className="ml-4 ">
        <div className="relative w-full h-[49vw] sm:h-[49vw] md:h-[50vw] lg:h-[50vw] xl:h-[50vw]">
            <img className="absolute top-0 left-[50%] w-[49vw] sm:w-[49vw] md:w-[50vw] lg:w-[50vw] xl:w-[50vw]  h-auto" src={YellowBg} alt="/" />
            <img className="absolute top-[3vh] sm:top-[6vh] md:top-[7vh] lg:top-[11vh] xl:top-[11vh] left-[3%] sm:left-[3%] md:left-[3%] lg:left-[3%] xl:left-[3%] w-[50vw] sm:w-[50vw] md:w-[52vw] lg:w-[52vw] xl:w-[52vw]  h-auto" src={BandImage} alt="/" />
            <img className="absolute  top-[7vh] sm:top-[12vh] md:top-[17vh] lg:top-[24vh] xl:top-[27vh] left-[66%] sm:left-[66%] md:left-[66%] lg:left-[66%] xl:left-[66%] w-[25vw] sm:w-[25vw] md:w-[25vw] lg:w-[25vw] xl:w-[25vw]  h-auto" src={PianoImage} alt="/" />
        </div>
    </div>
  );
}

export default Main;
