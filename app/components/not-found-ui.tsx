import { Link } from "@remix-run/react";
import { Button } from "./custom-button";
import { Section } from "./section";

export function NotFoundUI() {
  return (
    <Section className="h-screen bg-header-2 bg-no-repeat bg-cover grid justify-center items-start px-4">
      <div className="drop-shadow-xl rounded-md mt-32 p-6 bg-white text-center">
        <h1 className="text-[8rem] font-bold text-center">
          4<span className="text-blue-500">0</span>4
        </h1>
        <h2 className="text-4xl font-bold text-center uppercase">
          oops! page not found.
        </h2>
        <p className="mt-6 text-lg">
          The page you requested for could not be found.
        </p>
        <Button className="mt-8 text-lg" asChild>
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </Section>
  );
}
