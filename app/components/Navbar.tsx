"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { data, status } = useSession();
  return (
    <div className="p-4 flex space-x-4 bg-yellow-50">
      <div>Navbar</div>
      <div className="flex space-x-4">
        <div>
          {status === "unauthenticated" && (
            <Link href={"/api/auth/signin"}>Login</Link>
          )}
          {status === "authenticated" && <>{data.user?.name}</>}
        </div>
        {status === "authenticated" && (
          <div>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}
      </div>
    </div>
  );
};
