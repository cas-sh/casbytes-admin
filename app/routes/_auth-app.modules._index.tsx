import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { CustomTable } from "~/components/custom-table";

export default function ModulesIndexRoute() {
  const headItems = ["title", "course", "status"];
  const bodyItems = [
    { one: "one", two: "two", three: "three" },
    {
      one: "one.,mnmnb",
      two: "twokjhjklkjh",
      three: "threehreehreehreehreehreehree",
    },
    {
      one: "one.,mnmnb",
      two: "twokjhjklkjh",
      three: "threehreehreehreehreehreehree",
    },
    {
      one: "one.,mnmnb",
      two: "twokjhjklkjh",
      three: "threehreehreehreehreehreehree",
    },
    {
      one: "one.,mnmnb",
      two: "twokjhjklkjh",
      three: "threehreehreehreehreehreehreejkhghjkjhgfhjklkjhgfgh",
    },
  ];

  return (
    <Section className="max-w-4xl">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle title="modules" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <CustomTable
          searchInputPlaceholder="search modules"
          headerItems={headItems}
          bodyItems={bodyItems}
          viewUrl="/modules/1"
          editUrl="/modules/edit/1"
          formAction="/modules?index"
          publishDialogTitle="Are you sure you want to publish this module ?"
          publishDialogDescription="This will make the module available to students."
          deleteDialogTitle="Are you sure you want to delete this module ?"
          deleteDialogDescription={
            <>
              <p>This will delete the module and all its contents.</p>
              <strong>
                <em>This action is irreversible.</em>
              </strong>
            </>
          }
          publishDialogActionOnConfirm={() => {}}
          deleteDialogActionOnConfirm={() => {}}
        />
      </div>
    </Section>
  );
}
