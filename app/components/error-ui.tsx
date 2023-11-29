import { useNavigation, useNavigate } from "@remix-run/react";
import { Section } from "./section";
import { Button } from "./ui/button";
import { XCircle } from "lucide-react";

type ErrorUIProps = {
  error: Error | null | undefined | unknown;
};

export function ErrorUI({ error }: ErrorUIProps) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <Section className="bg-header-2 bg-no-repeat bg-cover h-screen">
      <div className="flex flex-col gap-4 max-w-sm mx-auto p-8 rounded-md drop-shadow-xl bg-sky-600/20  bg-red-300">
        <XCircle size={50} className="text-red-500  mx-auto font-bold" />
        <h1 className="capitalize text-4xl font-medium text-center">Error!</h1>
        <h2 className="capitalize text-2xl font-medium text-center">
          An error occured.
        </h2>
        <p className="text-center text-red-500">
          {error instanceof Error ? error?.message : "Unknown error"}
        </p>
        <Button
          onClick={() => navigate(0)}
          variant="destructive"
          className="!uppercase drop-shadow-xl w-full"
        >
          {isLoading ? "retrying..." : "try again"}
        </Button>
      </div>
    </Section>
  );
}
