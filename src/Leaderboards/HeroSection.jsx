function HeroSection() {
  return (
    <>
      <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-black sm:mb-0 mb-3 pt-5">
        More Than 5 Years We Provide Service <br class="md:block hidden" />
        In The Quiz Industry
      </h1>
      <div class="relative sm:flex items-center justify-center mt-[30px]">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="map"
          class="w-full xl:h-full h-96 object-cover sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="map-sm"
          class="sm:hidden -mt-10 block w-full h-96 object-cover absolute z-0"
        />

        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p class="text-3xl font-semibold text-gray-800">50K+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Active users
          </p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p class="text-3xl font-semibold text-gray-800">3K+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Quizzes solved
          </p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p class="text-3xl font-semibold text-gray-800">2K+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Purchases made
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
