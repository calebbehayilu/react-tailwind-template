import { createFileRoute } from "@tanstack/react-router";
import vite from "@/assets/vite.svg";
import react from "@/assets/react.svg";
import { useCounter } from "@/store/counter";
import { linkList } from "@/utils/links";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: () => App(),
});

function App() {
  const { count, increase } = useCounter();

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-5 pt-16 ">
          <div className="flex gap-x-24">
            <img src={vite} alt="" className="size-32" />
            <img src={react} alt="" className="size-32" />
          </div>
          <div className="">
            <h1 className="font-semibold text-center text-3xl text-slate-600 p-8 ">
              Features
            </h1>
            <ul className="grid grid-cols-3 gap-3">
              {linkList.map((link) => (
                <li
                  key={link.name}
                  className="p-2 border-2 rounded-lg text-2xl text-slate-400 font-medium"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button
              variant={"outline"}
              size={"lg"}
              className="  font-medium w-24"
              onClick={() => increase()}
            >
              Count - {count}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
