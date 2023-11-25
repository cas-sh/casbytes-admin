import React from "react";
import { BackButton } from "~/components/back-button";
import { CourseForm } from "~/components/course-form";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";

export default function AddCourseRoute() {
  const formRef = React.useRef<HTMLFormElement>(null);
  return (
    <Section className="max-w-4xl">
      <BackButton to="/courses" buttonText="courses" />
      <PageTitle title="add course" className="w-full mb-8" />
      <CourseForm
        buttonText="add course"
        formAction="/course/add-course"
        formRef={formRef}
      />
    </Section>
  );
}
