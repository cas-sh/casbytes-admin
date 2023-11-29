import React from "react";
import { BackButton } from "~/components/back-button";
import type { CourseValuesProps } from "~/components/course-form";
import { CourseForm } from "~/components/course-form";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";
import { useLocalStorageState } from "~/utils/hooks";

export default function AddCourseRoute() {
  const [courseValues, setCourseValues] = useLocalStorageState(
    "courseValues",
    {} as CourseValuesProps,
  );
  const formRef = React.useRef<HTMLFormElement>(null);
  // console.log(courseValues);

  // function handleCourseValuesChange(
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ): void {
  //   const target = event.currentTarget as HTMLInputElement;
  //   const { name, value, type, checked } = target;
  //   const updatedValue = type === "checkbox" ? checked : value;
  //   setCourseValues((prevValues: CourseValuesProps) => ({
  //     ...prevValues,
  //     [name]: updatedValue,
  //   }));
  // }

  return (
    <Section className="max-w-3xl">
      <BackButton to="/courses" buttonText="courses" />
      <PageTitle title="add course" className="w-full mb-8" />
      <CourseForm
        formRef={formRef}
        buttonText="add course"
        formAction="/course/add-course"
        courseValues={courseValues}
        setCourseValues={setCourseValues}
      />
    </Section>
  );
}
