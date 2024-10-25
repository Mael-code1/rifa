import { Loagreset } from "@/components/Loagreset";
import { Rifa } from "@/components/Rifa";
export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center div-contenido bg-no-repeat bg-center bg-cover ">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500  to-emerald-700 text-9xl font-mono">
        RIFA DEL ITA
      </h1>
      <div className="flex flex-col ">
        <Loagreset />
        <section className="flex ">
          <div className="w-[380px]  p-8 bg-teal-800 rounded-[12px]"></div>
        </section>
        <Rifa />
      </div>
    </div>
  );
}
