import logo from "~/assets/logo.png";

export function AppBanner() {
  return (
    <section className="text-black w-full mx-auto  bg-blue-500">
      <div className="flex flex-col items-center  max-w-3xl mx-auto w-full p-4">
        <div className="flex flex-wrap gap-4">
          <img src={logo} alt="CASBytes" width={150} />
          <h1 className="text-center text-lg text-slate-200">App banner</h1>
        </div>
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          nesciunt ratione voluptate sapiente voluptas perferendis deserunt odit
          explicabo, fugiat repellat magni est error ab. Dolorum repellendus
          quam officia beatae iste!
        </p>
      </div>
    </section>
  );
}
