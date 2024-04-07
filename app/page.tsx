import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Page() {
  return (
    // Changes dark or light based on system theme
    <main className="">
      {/* TODO: Fix panel background */}
      <div className="justify-center items-center text-center mt-[75px]">
        <Card>
          <CardBody>
            <p>wekul.dev</p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
