import { Form, useNavigation } from "@remix-run/react";
import { Loader2, Plus } from "lucide-react";
import { BackButton } from "~/components/back-button";
import { CustomAlert } from "~/components/custom-alert";
import { Button } from "~/components/custom-button";
import { Input } from "~/components/custom-input";
import { SelectInput } from "~/components/custom-select";
import { PageTitle } from "~/components/page-title";
import { Section } from "~/components/section";

export default function AddUser() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Section className="max-w-2xl">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle title="courses" className="w-full mb-8" />
      <Form className="w-full p-6 bg-white drop-shadow-md rounded-md flex flex-col gap-8">
        <h2 className="text-xl text-bold">Add user</h2>
        <Input
          id="user-first-name"
          name="userFirstName"
          placeholder="first name"
          required
        />
        <Input id="user-email" name="userEmail" placeholder="email" />
        <SelectInput
          id="role"
          name="role"
          placeholder="select role"
          options={["ADMIN", "MODERATOR", "MENTOR"]}
          required
        />
        <Button className="self-end capitalize">
          {isSubmitting ? (
            <Loader2 className="mr-2" />
          ) : (
            <Plus className="mr-2" />
          )}{" "}
          add
        </Button>
        <CustomAlert variant="destructive" title="an error occured." />
      </Form>
    </Section>
  );
}
