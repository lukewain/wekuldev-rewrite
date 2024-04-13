import React from "react";
import MEE6Slander from "./components/MEE6-Slander";

export default function Page() {
  return (
    <main>
      <div className="justify-center place-content-center items-center mt-[75px] mb-[30px]">
        <p className="text-[#ffff] text-6xl font-mono text-center">wekul.dev</p>
        <br />
      </div>
      <hr className="flex m-auto sm:w-[95%] lg:w-[98%] h-2 justify-center items-center place-content-center" />
      <div id="project-list">
        {/* All the projects ive done and what about */}
        <h1 className="font-mono text-4xl ml-10 mt-5 underline underline-offset-2">
          My Projects
        </h1>
        <MEE6Slander />
      </div>
      <div id="socials-list" className="mt-[90px] mb-[20px]">
        <h1 className="font-mono text-4xl ml-10 mt-5 underline underline-offset-2">
          My Connections
        </h1>
        <div
          className="flex flex-col lg:flex-row place-content-center justify-center items-center mt-[20px]"
          id="fade-in"
        >
          <div className="lg:mr-[20px] mb-[5px] lg:mb-[0px]" id="card1">
            <div className="card shadow-xl w-[300px] h-[309px] bg-[#ffff] text-[#000000]">
              <figure>
                <img
                  width="25%"
                  height="25%"
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="Github Logo"
                />
              </figure>
              <div className="card-title flex flex-col mt-[5px]">
                <p className="text-md">GitHub</p>
              </div>
              <div className="card-body items-center">
                The GitHub where all my projects can be found!
              </div>
              <div className="card-actions justify-center mb-[18px]">
                <a
                  href="https://github.com/lukewain"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="btn btn-primary text-[#ffff]">
                    My GitHub!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:ml-[20px] mt-[5px] lg:mt-[0px]" id="card2">
            <div className="card shadow-xl w-[300px] h-[309px] bg-[#ffff] text-[#000000]">
              <figure>
                <img
                  width="25%"
                  height="25%"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/252250107793711.5faee56d2d7de.png"
                  alt="Discord Logo"
                />
              </figure>
              <div className="card-title flex flex-col mt-[5px]">
                <p className="text-md">Discord</p>
              </div>
              <div className="card-body items-center">My discord profile!</div>
              <div className="card-actions justify-center mb-[18px]">
                <a
                  href="https://discordapp.com/users/268815279570681857"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="btn btn-primary text-[#ffff]">
                    Add Me!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
