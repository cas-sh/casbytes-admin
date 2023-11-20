import { Form } from "@remix-run/react";
import { Section } from "~/components/section";
import { FormInput } from "~/components/form-input";
import { Button } from "~/components/ui/button";
import logo from "~/assets/logo.png";

export default function SignInRoute() {
  return (
    <Section className="bg-header-2 bg-no-repeat bg-cover h-screen">
      <Form
        method="post"
        action="/sign-in"
        className="flex flex-col gap-4 max-w-sm mx-auto p-8 rounded-md drop-shadow-xl bg-sky-600/20"
      >
        <img src={logo} alt="CASBytes" width={150} className="mx-auto mb-4" />
        <h1 className="text-2xl text-center mb-6">Sign In</h1>
        {/* form inputs */}
        <FormInput
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
          required
          message="Invalid email address"
        />

        <Button
          className="!uppercase mt-6 bg-zinc-600 hover:!bg-zinc-500 hover:text-white"
          type="submit"
        >
          sign in
        </Button>
      </Form>
    </Section>
  );
}
