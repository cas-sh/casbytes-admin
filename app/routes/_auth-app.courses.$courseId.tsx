import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { courses } from "~/utils/courses.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ courses });
}

export default function CoursesIndexRoute() {
  return (
    <Section className="max-w-4xl">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle title="javascript functions" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <h1>course id</h1>
      </div>
    </Section>
  );
}
