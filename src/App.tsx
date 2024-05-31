import { Button } from "./components/ui/button";
import vite from "./../public/vite.svg";
import react from "./assets/react.svg";
function App() {
  const linkList = [
    {
      name: "⚡️ React 18",
      link: "https://react.dev/blog/2022/03/29/react-v18",
    },
    {
      name: "🦾 TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "🫀 Vitest",
      link: "https://vitest.dev/",
    },
    {
      name: "🍃 Tailwind with JIT",
      link: "https://tailwindcss.com/docs/installation",
    },
    {
      name: "🎨 Shadcn/ui",
      link: "https://github.com/shadcn-ui/ui",
    },
    {
      name: "🐻Zustand",
      link: "https://github.com/pmndrs/zustand",
    },
    {
      name: "📃 React Router",
      link: "https://reacttraining.com/react-router",
    },
    {
      name: "🪝React Hook Form",
      link: "https://reactrouter.com/en/main/components/form",
    },
    {
      name: "🗂 Absolute imports",
      link: "https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases",
    },
    {
      name: "✨ Lucide React",
      link: "https://heroicons.com/",
    },
  ];

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center gap-5 h-screen">
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
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
