import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";

export default function ModulesIndexRoute() {
  return (
    <Section className="max-w-4xl">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle title="modules" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <h1>modules</h1>
      </div>
    </Section>
  );
}
