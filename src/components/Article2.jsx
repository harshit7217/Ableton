
import sound from './../../public/sound.jpg';

function Article2() {
  return (
    <div className="mx-15 flex flex-col justify-center items-center">
      <div className="my-20 w-[95%]">
        <p className="text-[1.5rem] font-bold">
          We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
        </p>
        <p className="my-3">
          Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center w-full h-[70vh]'>
        <img className='w-full h-full object-cover' src={sound} alt="/" />
      </div>
      <div className="my-20 w-[95%]">
        <p className="text-[1.5rem] font-bold">
          We’re passionate about what we do, but we’re equally passionate about improving who we are.
        </p>
        <p className="my-3">
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
        </p>
        <p className="my-3">
          Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
        </p>
      </div>
    </div>
  );
}

export default Article2;
