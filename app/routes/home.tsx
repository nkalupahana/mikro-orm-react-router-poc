import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { orm } from "~/db";
import { User } from "~/entities/user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const em = orm.em.fork();
  const users = await em.find(User, {});
  return { users };
}

export default function Home() {
  return <Welcome />;
}
