import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <div>Home page</div>
      <div>Hello {session && <span>{session?.user?.name}</span>}</div>
    </div>
  );
}
