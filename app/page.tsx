import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Page() {
  return (
    // Changes dark or light based on system theme
    <main className="">
      {/* TODO: Fix panel background */}
      <div className="justify-center place-content-center items-center mt-[75px]">
        <Card className="bg-gradient-to-r from-[#6DB1FA] to-[#F6159B] text-border-black w-[250px] mx-auto">
          <CardBody id="MainHeader" className="justify-center items-center text-center text-[#D6E7FD] text-4xl">
            <p>wekul.dev</p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
