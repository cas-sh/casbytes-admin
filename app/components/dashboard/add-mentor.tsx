import { Form, useNavigation } from "@remix-run/react";
import { Input } from "../custom-input";
import { Button } from "../custom-button";
import { Loader2, Plus } from "lucide-react";
import { SelectInput } from "../custom-select";

//zod
//alert dialog
// alert

export function AddMentor() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="w-full p-6 bg-white drop-shadow-md rounded-md flex flex-col gap-8">
      <h2 className="text-xl text-bold">Add mentor</h2>
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
    </Form>
  );
}
