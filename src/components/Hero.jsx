import HeroImage from './../../public/hero-image.jpg';

function Hero() {
    return (
        <div className='mx-15 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-full h-[70vh]'>
                <img className='relative w-full h-full object-cover' src={HeroImage} alt="/" />
                <h1 className='absolute text-[3rem] text-red-500'>Ableton</h1>
            </div>
            <div className='my-20 w-[95%]'>
                <p className='text-[1.5rem] font-bold'>
                    We make <span className='text-blue-900'>Live</span>, <span className='text-blue-900'>Push</span>, <span className='text-blue-900'>Note</span>, <span className='text-blue-900'>Move</span> and <span className='text-blue-900'>Link</span> - unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                </p>
                <p className='my-3'>
                    Ableton was founded in 1999 and released the first version of live in 2001. Our products are used by a community of dedicated musicians, and artists from across the world.
                </p>
            </div>
        </div>
    )
}

export default Hero;