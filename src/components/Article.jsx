function Article() {
  return (
    <div className="mx-15 flex flex-col justify-center items-center">
      <div className="my-20 w-[95%]">
        <p className="text-[1.5rem] font-bold">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </p>
        <p className="my-3">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="mx-15">
        <iframe
          className="w-[85vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[90vw]  h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] xl:h-[90vh]"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?si=xAdQXR0G00okosvj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="my-20 w-[95%]">
        <p className="text-[1.5rem] font-bold">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </p>
        <p className="my-3">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>
    </div>
  );
}

export default Article;
