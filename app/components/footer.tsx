export function Footer() {
  const year = new Date().getFullYear();
  const currentYear = 2023;
  return (
    <footer className="bg-zinc-900  text-slate-50 p-4 flex justify-center">
      <p>
        CAS LLC &copy;
        {year === currentYear ? year : currentYear - year} - All Rights
        Reserved.
      </p>
    </footer>
  );
}
