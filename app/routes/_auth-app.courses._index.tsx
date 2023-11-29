import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BackButton } from "~/components/back-button";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import {
  CustomTable,
  TableActionButtons,
  TableStatusTooltip,
} from "~/components/custom-table";
import { courses } from "~/utils/courses.server";
import { TableCell, TableRow } from "~/components/ui/table";

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ courses });
}

export default function CoursesIndexRoute() {
  const { courses } = useLoaderData<typeof loader>();
  const headerItems = ["title", "curriculum", "status"];

  return (
    <Section className="max-w-4xl">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle title="courses" className="w-full mb-8" />
      <div className="drop-shadow-md p-2 bg-white rounded-md">
        <CustomTable
          searchInputPlaceholder="search courses"
          tableHeaderItems={headerItems}
          formAction="/courses?index"
        >
          {courses && courses?.length > 0 ? (
            courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.curriculum}</TableCell>
                <TableCell>
                  <TableStatusTooltip item={course} />
                </TableCell>
                <TableCell>
                  <TableActionButtons
                    item={course}
                    viewUrl="/courses/1"
                    editUrl="/courses/edit/1"
                    formAction="/courses?index"
                    publishDialogTitle="Are you sure you want to publish this course ?"
                    publishDialogDescription="This will make the course available to students."
                    unPublishDialogTitle="Are you sure you want to unpublish this course ?"
                    unPublishDialogDescription="This will make the course unavailable to students."
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
                    unPublishDialogActionOnConfirm={() => {}}
                    deleteDialogActionOnConfirm={() => {}}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <h1 className="text-center text-slate-400 text-3xl">
              No courses available at this moment.
            </h1>
          )}
        </CustomTable>
      </div>
    </Section>
  );
}
