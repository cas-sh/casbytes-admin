import { Form } from "@remix-run/react";
import { Input } from "../custom-input";
import { Button } from "../custom-button";
import { Plus } from "lucide-react";

export function AddMentor() {
  return (
    <Form className="w-full p-6 bg-white drop-shadow-md rounded-md flex flex-col gap-8">
      <h2 className="text-xl text-bold">Add mentor</h2>
      <Input id="add-member" name="add-member" placeholder="email" />
      <Button className="self-end capitalize">
        <Plus className="mr-2" /> add
      </Button>
    </Form>
  );
}
