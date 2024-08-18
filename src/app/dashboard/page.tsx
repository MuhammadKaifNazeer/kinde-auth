import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Dashboad() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) return redirect("/signin");

  console.log(user);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-[#0f0f0f] bg-[#141414] p-5 rounded-2xl">
          <div className="flex flex-col gap-4 p-5 bg-[#0f0f0f] rounded-2xl ">
            <Image
              src={user.picture}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1>First Name: {user.given_name}</h1>
            <h1>Last Name: {user.family_name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>ID: {user.id}</h1>

            <LogoutLink>
              <Button>Logout</Button>
            </LogoutLink>
          </div>
        </div>
      </div>
    </>
  );
}
