import React from "react";
import { Form, useNavigation } from "@remix-run/react";
import { Loader2 } from "lucide-react";
import { SelectInput } from "./custom-select";
import { Input } from "./custom-input";
import { Button } from "./custom-button";
import { Checkbox } from "./custom-checkbox";
import { FormLoadingUI } from "./loading-indicators";
import { CustomAlert } from "./custom-alert";

export interface CourseValuesProps {
  courseTitle: string;
  coursePublish: boolean;
  courseCurriculum: string;
}

type CourseFormProps = {
  formRef: React.RefObject<HTMLFormElement>;
  formAction: string;
  buttonText: string;
  courseValues: CourseValuesProps;
  errorMessage?: string;
  setCourseValues: React.Dispatch<React.SetStateAction<CourseValuesProps>>;
};

export function CourseForm({
  formRef,
  formAction,
  buttonText,
  courseValues,
  errorMessage,
  setCourseValues,
}: CourseFormProps) {
  const [isServer, setIsServer] = React.useState(true);
  function handleCourseValuesChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const target = event.currentTarget as HTMLInputElement;
    const { name, value, type, checked } = target;
    const updatedValue = type === "checkbox" ? checked : value;
    setCourseValues((prevValues: CourseValuesProps) => ({
      ...prevValues,
      [name]: updatedValue,
    }));
  }

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isSubmitting = navigation.state === "submitting";

  React.useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return <FormLoadingUI />;

  return (
    <Form
      method="post"
      action={formAction}
      ref={formRef}
      className="flex flex-col gap-8 w-full"
    >
      <SelectInput
        value={courseValues.courseCurriculum}
        id="course-curriculum"
        name="courseCurriculum"
        label="Course curriculum"
        placeholder="Select curriculum"
        options={["BASIC", "ADVANCED"]}
        // message="Course curriculum is required"
        onValueChange={(selectedValue) =>
          setCourseValues((prevValues: CourseValuesProps) => ({
            ...prevValues,
            courseCurriculum: selectedValue,
          }))
        }
      />
      <Input
        value={courseValues.courseTitle}
        id="course-title"
        name="courseTitle"
        label="Course title"
        placeholder="e.g. HTML"
        onChange={handleCourseValuesChange}
        // message="Course title is required"
      />
      <div className="flex justify-between">
        <Checkbox
          id="course-publish"
          name="coursePublish"
          label="Publish course"
          onChange={handleCourseValuesChange}
          checked={courseValues.coursePublish}
        />
        <Button
          disabled={isLoading || isSubmitting}
          className="text-lg capitalize"
        >
          {isLoading || isSubmitting ? (
            <Loader2 className="animate-spin mr-2" />
          ) : null}
          {buttonText}
        </Button>
      </div>
      {errorMessage ? (
        <CustomAlert
          title={errorMessage}
          variant="destructive"
          className="mt-2"
        />
      ) : null}
    </Form>
  );
}
