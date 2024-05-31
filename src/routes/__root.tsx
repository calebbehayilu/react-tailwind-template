import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="relative flex justify-between px-10 py-3 border border-b-accent ">
        <h1 className="font-bold text-3xl">React⚡️</h1>
        <ul className="flex gap-10 items-center">
          <li>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </li>
          <li>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
