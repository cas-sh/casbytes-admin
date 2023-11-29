import React from "react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { BackButton } from "~/components/back-button";
import type { CourseValuesProps } from "~/components/course-form";
import { CourseForm } from "~/components/course-form";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { useLocalStorageState } from "~/utils/hooks";

export async function loader({ params }: LoaderFunctionArgs) {
  console.log(params);

  // const courseId = request.params.courseId;
  return {};
}

export default function EditCourseRoute() {
  const [courseValues, setCourseValues] = useLocalStorageState(
    "courseValues",
    {} as CourseValuesProps,
  );
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <Section className="max-w-4xl">
      <BackButton to="/courses" buttonText="courses" />
      <PageTitle title="edit course" className="w-full mb-8" />
      <CourseForm
        formRef={formRef}
        buttonText="edit course"
        formAction="/course/edit/1"
        courseValues={courseValues}
        setCourseValues={setCourseValues}
      />
    </Section>
  );
}
