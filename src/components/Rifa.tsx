import Itenm from "./Itenm";

export function Rifa() {
  return (
    <div className="grid grid-cols-10 grid-rows-[20] border border-teal-900  bg-teal-900  gap-1 ">
      {new Array(200).fill(null).map((_, numero) => {
        return <Itenm id={numero} key={numero} />;
      })}
    </div>
  );
}
