import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { CustomTable } from "~/components/custom-table";

export default function LessonsIndexRoute() {
  const headItems = ["title", "module", "status"];
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
      <PageTitle title="lessons" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <CustomTable
          searchInputPlaceholder="search lessons"
          headerItems={headItems}
          bodyItems={bodyItems}
          viewUrl="/lessons/1"
          editUrl="/lessons/edit/1"
          formAction="/lessons?index"
          publishDialogTitle="Are you sure you want to publish this lesson ?"
          publishDialogDescription="This will make the lesson available to students."
          deleteDialogTitle="Are you sure you want to delete this lesson ?"
          deleteDialogDescription={
            <>
              <p>This will delete the lesson and all its contents.</p>
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
