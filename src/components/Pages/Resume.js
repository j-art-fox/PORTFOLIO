export default function Resume() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <img
            src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1600"
            class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"
          />
          <div class="md:w-3/5 md:pl-6">
            <h1 class="lg:text-6xl inline sm:text-3xl text-2xl my-10 text-gray-900 font-medium title-font mb-2 md:w-2/5">
              {" "}
              Let's be coworkers!
            </h1>
            <p class="leading-relaxed text-base m-5">
              If you're looking for a people-loving and easy-to-work with web
              developer whose passionate about bringing people together to unite
              around a common purpose, then look no further!
            </p>
            <div class="flex-col md:mt-4 mt-6">
              <button class="inline text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                <a
                  href="https://docs.google.com/document/d/1Hli8lSYZVygG_5i4FX9eifRObuFjoR_m0qq905Ji1NA/edit?usp=sharing"
                  class="white inline-flex items-center ml-4"
                >
                  See Resume
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
