import jateImg from "../../Images/jate.jpg";
import gitHubLogo from "../../Images/GitHub-Logo.png";

const projects = [
  {
    title: "JEST",
    description:
      "Browser based graphical user interface for helping developers create source code.",
    img: jateImg,
    url: "https://the-jate-text-editor.herokuapp.com",
    repurl: "https://github.com/j-art-fox/Text-Editor-Demo",
  },
  {
    title: "Password Generator",
    description:
      "Customizeable password generator that can include multiple character types.",
    img: "https://github.com/j-art-fox/Password-Generator-/raw/main/assets/images/preview1.png",
    url: "https://j-art-fox.github.io/Password-Generator-/",
    repurl: "https://github.com/j-art-fox/Password-Generator-",
  },
  {
    title: "E-Commerce Back-End",
    description:
      "Mock-up of a fully operational API created with SQL, express and Sequelize.",
    img: "https://github.com/j-art-fox/E-Commerce-Back-End/raw/main/Assets/img/Screen%20Shot%202022-09-15%20at%2010.37.24%20AM.png",
    url: "https://github.com/j-art-fox/E-Commerce-Back-End",
    repurl: "https://github.com/j-art-fox/E-Commerce-Back-End",
  },
  {
    title: "Git Surveys",
    description:
      "A survey builder for creating and surveying people easily online.",
    img: "https://github.com/benbushman98/gitsurveys/raw/main/public/images/screenshot.png",
    url: "https://www.gitsurveys.com/",
    repurl: "https://github.com/benbushman98/gitsurveys",
  },
  {
    title: "Fantasy Football Picks",
    description:
      "Get news, stats, and ratings to help you make fantasy football picks.",
    img: "https://github.com/kolbykimball/project-1/raw/main/assets/images/screencapture-127-0-0-1-5502-resultsPage-html-2022-08-01-19_06_01.png",
    url: "https://kolbykimball.github.io/project-1/",
    repurl: "https://github.com/kolbykimball/project-1",
  },
  {
    title: "The Note Taker",
    description:
      "Web Application that allows users to easily take and save notes on their browser's local storage.",
    img: "https://github.com/j-art-fox/Task-Manager/blob/main/public/assets/IMG/prev2.png?raw=true",
    url: "https://still-harbor-79286.herokuapp.com/notes",
    repurl: "https://github.com/j-art-fox/Task-Manager",
  },
];

// const ProjectList = projects.forEach((i) => {
//   return (
//     <div class="lg:w-1/3 sm:w-1/2 p-4">
//       <div class="flex relative">
//         <img
//           alt="gallery"
//           class="absolute inset-0 w-full h-full object-cover object-top"
//           src={projects[i].img}
//         />
//         <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//           <a href={projects[i].url}>
//             <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
//               {projects[i].title}
//             </h1>
//           </a>
//           <a href={projects[i].repurl}>
//             <img class="h-10 inline" src={gitHubLogo} />
//           </a>
//           <p class="leading-relaxed">{projects[i].description}</p>
//         </div>
//       </div>
//     </div>
//   );
// });

export default function Work() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My professional, personal, and student work, it's ALL here!{" "}
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              （Except for the embarrassing stuff）
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {/* project 1 */}
            <div class="lg:w-1/3 h-full sm:w-1/2 p-4">
              <div class="flex relative border-4  border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[0].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[0].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[0].title}
                    </h1>
                  </a>
                  <a href={projects[0].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[0].description}</p>
                </div>
              </div>
            </div>

            {/* <ProjectList/> */}

            {/* project 2 */}

            <div class="lg:w-1/3 h-full  border-gray-200 sm:w-1/2 p-4">
              <div class="flex relative border-4 border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[1].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[1].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[1].title}
                    </h1>
                  </a>
                  <a href={projects[1].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[1].description}</p>
                </div>
              </div>
            </div>

            {/* project 3 */}

            <div class="lg:w-1/3 h-full  border-gray-200 sm:w-1/2 p-4">
              <div class="flex relative border-4 border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[2].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[2].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[2].title}
                    </h1>
                  </a>
                  <a href={projects[2].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[2].description}</p>
                </div>
              </div>
            </div>

            {/* project 4 */}

            <div class="lg:w-1/3 h-full  border-gray-200 sm:w-1/2 p-4">
              <div class="flex relative border-4 border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[3].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[3].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[3].title}
                    </h1>
                  </a>
                  <a href={projects[3].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[3].description}</p>
                </div>
              </div>
            </div>

            {/* project 5 */}

            <div class="lg:w-1/3 h-full  border-gray-200 sm:w-1/2 p-4">
              <div class="flex relative border-4 border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[4].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[4].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[4].title}
                    </h1>
                  </a>
                  <a href={projects[4].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[4].description}</p>
                </div>
              </div>
            </div>

            {/* project 6 */}

            <div class="lg:w-1/3 h-full  border-gray-200 sm:w-1/2 p-4">
              <div class="flex relative border-4 border-gray-200">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-top"
                  src={projects[5].img}
                />
                <div class="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={projects[5].url}>
                    <h1 class="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {projects[5].title}
                    </h1>
                  </a>
                  <a href={projects[5].repurl}>
                    <img class="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p class="leading-relaxed">{projects[5].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
