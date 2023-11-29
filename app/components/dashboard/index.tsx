import { PageTitle } from "../page-title";
import { AddMentor } from "./add-mentor";
import { Cards } from "./cards";
import Events from "./events";
import { ResourcesButtons } from "./resource-buttons";
import { Workshops } from "./workshops";

export function Dashboard() {
  return (
    <div className="md:p-4 p-2 flex flex-col gap-6 mx-auto max-w-4xl w-full border-2 rounded-md">
      <PageTitle
        title="dashboard"
        className="text-2xl mb-4 mx-auto rounded-md"
      />
      <Cards />
      <div>
        <div className="flex flex-wrap mx-auto gap-6 p-4 bg-white drop-shadow-md rounded-md justify-around">
          {/* <Piechart /> */}
          {/* <Barchart /> */}
          charts
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <ResourcesButtons />
        <AddMentor />
      </div>
      <div className="bg-white drop-shadow-md rounded-md w-full flex gap-4 flex-col p-4 items-center overflow-x-auto">
        <Events />
        <hr />
        <Workshops />
      </div>
    </div>
  );
}
