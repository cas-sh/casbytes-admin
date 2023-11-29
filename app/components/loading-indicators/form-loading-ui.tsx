export function FormLoadingUI({ inputIndex = 2, editor = false }) {
  return (
    <div className="w-full flex flex-col gap-10">
      {Array(inputIndex)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="h-12 rounded-md bg-slate-300 animate-pulse"
          ></div>
        ))}
      {editor ? (
        <div className="h-40 rounded-md bg-slate-300 animate-pulse"></div>
      ) : null}
      <div className="h-12 w-32 self-end rounded-md bg-slate-300 animate-pulse"></div>
    </div>
  );
}
