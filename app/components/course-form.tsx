import React from "react";
import { Form } from "@remix-run/react";
import { SelectInput } from "./custom-select";
import { Input } from "./custom-input";
import { Checkbox } from "./custom-checkbox";
import { Button } from "./custom-button";

type CourseFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  formAction: string;
  buttonText: string;
  courseValues?: any;
  setCourseValues?: any;
};

export function CourseForm({
  formRef,
  formAction,
  buttonText,
  courseValues,
  setCourseValues,
}: CourseFormProps) {
  React.useEffect(() => {
    if (courseValues) {
      Object.keys(courseValues).forEach((key) => {
        const input = formRef.current?.querySelector(
          `#${key}`,
        ) as HTMLInputElement;
        if (input) {
          input.value = courseValues[key];
        }
      });
    }
  }, [courseValues, formRef]);

  function handleCourseValuesChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setCourseValues((prevValues: any) => ({
      ...prevValues,
      [name]: updatedValue,
    }));
  }

  return (
    <Form
      method="post"
      action={formAction}
      ref={formRef}
      className="flex flex-col gap-8 w-full"
    >
      <SelectInput
        name="courseCurriculum"
        id="course-curriculum"
        label="Course curriculum"
        placeholder="Select curriculum"
        groupLabel="Curriculum"
        options={["BASIC", "ADVANCED"]}
        onChange={handleCourseValuesChange}
        className="w-full"
      />
      <Input
        id="course-title"
        name="courseTitle"
        placeholder="e.g: Introduction to HTML"
        label="Course title"
        onChange={handleCourseValuesChange}
      />
      <div className="flex justify-between">
        <Checkbox
          type="checkbox"
          id="course-publish"
          name="coursePublish"
          label="publish course"
          onChange={handleCourseValuesChange}
        />
        <Button className="text-lg capitalize">{buttonText}</Button>
      </div>
    </Form>
  );
}
