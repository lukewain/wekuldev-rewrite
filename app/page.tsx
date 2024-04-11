import React from "react";

export default function Page() {
  return (
    <main>
      <div className="justify-center place-content-center items-center mt-[75px] mb-[30px]">
        <p className="text-[#ffff] text-6xl font-mono text-center">wekul.dev</p>
        <br />
      </div>
      <div
        className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row place-content-center justify-center items-center"
        id="fade-in"
      >
        <div className="md:mr-[20px] sm:mb-[5px]" id="card1">
          <div className="card shadow-xl w-96 h-[439px] bg-[#ffff] text-[#000000]">
            <figure>
              <img
                width="50%"
                height="50%"
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
        <div className="md:ml-[20px] sm:mt-[5px]" id="card2">
          <div className="card shadow-xl w-96 h-[439px] bg-[#ffff] text-[#000000]">
            <figure>
              <img
                width="50%"
                height="50%"
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
    </main>
  );
}
