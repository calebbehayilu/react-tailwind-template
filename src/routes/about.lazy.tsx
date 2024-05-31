import { useCounter } from "@/store/counter";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: () => about(),
});

const about = () => {
  const { count } = useCounter();
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-16 ">
      {count}
    </div>
  );
};
