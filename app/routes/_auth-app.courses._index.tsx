import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { CustomTable } from "~/components/custom-table";

export default function CoursesIndexRoute() {
  const headItems = ["title", "curriculum", "status"];
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
      <PageTitle title="courses" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <CustomTable
          searchInputPlaceholder="search courses"
          headerItems={headItems}
          bodyItems={bodyItems}
          viewUrl="/courses/1"
          editUrl="/courses/edit/1"
          formAction="/courses?index"
          publishDialogTitle="Are you sure you want to publish this course ?"
          publishDialogDescription="This will make the course available to students."
          deleteDialogTitle="Are you sure you want to delete this course ?"
          deleteDialogDescription={
            <>
              <p>This will delete the course and all its contents.</p>
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
