/* eslint-disable @next/next/no-img-element */
import Layouts from "@/components/Layouts";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data : session} = useSession();
  console.log(session);

  return (
    <Layouts>
      <div className="text-green-900 flex justify-between">
        <h2>Bonjour, {session?.user?.name}</h2>
        <div className="flex bg-gray-300 gap-2 text-black rounded-lg overflow-hidden">
          <img className="w-8 h-8" src={session?.user?.image} alt="Image utilisateur" />
          <span className="py-1 px-2">
            {session?.user?.name}
            </span>
        </div>
      </div>
    </Layouts>
  )
}
