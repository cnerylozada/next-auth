import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-4 flex space-x-4 bg-yellow-50">
      <div>Navbar</div>
      <div>
        <div>
          <Link href={"/api/auth/signin"}>Login</Link>
        </div>
      </div>
    </div>
  );
};
