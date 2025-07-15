import Board from "./../../public/board.jpg";
import Green from "./../../public/green.jpg";
import MusicTeacher from "./../../public/music-teaching.jpg";
import Teacher from "./../../public/teacher.jpg";

function Music() {
  return (
    <div className="mr-4 ">
      <div className="relative w-full h-[32vw] sm:h-[36vw] md:h-[39vw] lg:h-[40vw] xl:h-[40vw]">
        <img
          className="absolute top-0  w-[60vw] sm:w-[64vw] md:w-[64vw] lg:w-[65vw] xl:w-[64vw]  h-auto"
          src={Green}
          alt="/"
        />
        <img
          className="absolute top-[2.5vh] sm:top-[3.7vh] md:top-[4.5vh] lg:top-[6vh] xl:top-[8vh] right-[3%] sm:right-[2%] md:right-[3%] lg:right-[3%] xl:right-[3%] w-[38vw] sm:w-[44vw] md:w-[44vw] lg:w-[44vw] xl:w-[44vw]  h-auto"
          src={MusicTeacher}
          alt="/"
        />
        <img
          className="absolute  top-[2.5vh] sm:top-[3.7vh] md:top-[4.5vh] lg:top-[6vh] xl:top-[8vh] right-[66%] sm:right-[66%] md:right-[66%] lg:right-[66%] xl:right-[66%] w-[15vw] sm:w-[16vw] md:w-[17vw] lg:w-[18vw] xl:w-[18vw]  h-auto"
          src={Teacher}
          alt="/"
        />
        <img
          className="absolute  top-[11vh] sm:top-[18vh] md:top-[22vh] lg:top-[29vh] xl:top-[38vh] right-[68%] sm:right-[68%] md:right-[68%] lg:right-[68%] xl:right-[68%] w-[11vw] sm:w-[12vw] md:w-[13vw] lg:w-[14vw] xl:w-[14vw]  h-auto"
          src={Board}
          alt="/"
        />
      </div>
      
    </div>
  );
}

export default Music;
