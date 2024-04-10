import * as React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Link,
} from "@nextui-org/react";

export default function Page() {
  return (
    // Changes dark or light based on system theme
    <main>
      {/* TODO: Fix panel background */}
      <div className="justify-center place-content-center items-center mt-[75px] mb-[30px]">
        <p className="text-[#ffff] text-6xl font-mono text-center">wekul.dev</p>
      <br />
      </div>
      <div className="columns-2 max-w-[50%] mx-auto" id="fade-in">
        <Card className="max-w-[400px] justify-center items-center place-content-center mx-auto">
          <CardHeader>
            <Image
              alt="Github Logo"
              height={40}
              width={40}
              radius="md"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              className="rounded-[50%]"
            ></Image>
            <div className="flex flex-col">
              <p className="text-md">GitHub</p>
              <p className="text-small text-default-500">https://github.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>The GitHub where all my projects can be found!</CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/lukewain">
              View my github here!
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] justify-center items-center place-content-center mx-auto">
          <CardHeader>
            <Image
              alt="Github Logo"
              height={40}
              width={40}
              radius="md"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/252250107793711.5faee56d2d7de.png"
              className="rounded-[50%]"
            ></Image>
            <div className="ml-[7px] flex flex-col">
              <p className="text-md">Discord</p>
              <p className="text-small text-default-500">https://discord.gg</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>My discord profile!</CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href=" https://discordapp.com/users/268815279570681857"
            >
              Add my discord here!
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
