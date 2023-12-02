import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { Section } from "~/components/section";
import { Input } from "~/components/custom-input";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/custom-checkbox";
import { CustomAlert } from "~/components/custom-alert";
import logo from "~/assets/logo.png";

export async function loader({ request }: LoaderFunctionArgs) {
  return {};
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const agreement = formData.get("agreement");
  console.log(agreement);
  return {};
}

export default function SignInRoute() {
  const message = "You must agree to the privacy policy and terms of use.";
  return (
    <Section className="bg-header-2 bg-no-repeat bg-cover h-screen">
      <Form
        method="post"
        className="flex flex-col gap-8 max-w-sm mx-auto p-8 rounded-md drop-shadow-xl bg-sky-600/20"
      >
        <h1 className="text-2xl text-center">Sign In</h1>
        <img src={logo} alt="CASBytes" width={150} className="mx-auto" />
        {/* form inputs */}
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          // message="Invalid email address"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          // message="Invalid password"
          required
        />
        <Checkbox
          id="agreement"
          name="agreement"
          label={
            <>
              I agree to the {""}
              <Link to="privacy-policy" className="text-blue-600">
                Privacy policy
              </Link>{" "}
              and {""}
              <Link to="terms-of-use" className="text-blue-600">
                Terms of use
              </Link>
            </>
          }
        />
        <Button
          className="!uppercase bg-zinc-600 hover:!bg-zinc-500 hover:text-white"
          type="submit"
        >
          sign in
        </Button>
        {message ? <CustomAlert title={message} variant="destructive" /> : null}
      </Form>
    </Section>
  );
}
