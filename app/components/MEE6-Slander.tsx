import Image from "next/image";
import React from "react";
import mee6 from "../../public/MEE6 Slander web.png";

export default function MEE6Slander() {
  return (
    <div className="card w-[60%] mx-auto mt-[25px] mb-[20px] bg-[#fff]">
      <div
        id="top-bar"
        className="flex justify-start items-start mt-[4px] ml-[8px]"
      >
        <figure>
          <Image
            src={mee6}
            alt="MEE6 Slander Discord Image"
            width={75}
            height={75}
            className="rounded-md mt-[5px]"
          />
        </figure>
        <div className="card-title ml-[9px] mt-[25px]">
          <h1 className="mx-auto text-center justify-center underline underline-offset-4 text-[#000000]">
            MEE6 Slander
          </h1>
        </div>
      </div>
      <div className="card-body">
        <div className="w-[95%] mx-auto">
          <p>
            {
              "MEE6 Slander originally started out as a funny bot for me and my friends to laugh about how MEE6 was annoying and always messaged at the most inconvenient of times."
            }
            <br />
            <br />
            {
              "Since its creation, the bot has grown to exist in over 1,000 servers and is used by over 20,000 people. If you'd like you can check out the source code or even invite the bot to your own server. Just make sure you have MEE6 there otherwise you won't benefit!"
            }
          </p>
        </div>
        <div className="card-actions justify-center mt-[10px]">
          <a href="https://github.com/lukewain/MEE6-Slander">
            <button className="btn btn-primary">View the source</button>
          </a>
          <a href="https://discord.com/oauth2/authorize?client_id=1013859380652953671&permissions=275414845440&scope=applications.commands+bot">
            <button className="btn btn-primary">Add the bot</button>
          </a>
        </div>
      </div>
    </div>
  );
}
