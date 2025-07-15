import Student from "./../../public/student.jpg";
import bg from "./../../public/bg.jpg";
function Last() {
  return (
    <div className="md:flex flex-wrap justify-center items-center mx-15">
        <div className="xl:w-[50%]">
            <img className="w-full h-auto" src={Student} alt="/" />
        </div>
        <div className="relative xl:w-[50%]">
            <img className="relative  w-full h-auto " src={bg} alt="/" />
            <h2 className="absolute top-[10%] sm:top-[15%] md:top-[11%] lg:top-[17%] xl:top-[18%] px-[6%] sm:px-[7%] md:px-[7%] lg:px-[15%] xl:px-[28%] text-[1.1rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[2rem] text-center">We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
        </div>
    </div>
  );
}

export default Last;
