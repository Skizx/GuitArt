import Navigation from "@/components/Navigation";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layouts({ children }) {

  const { data: session } = useSession();
  if (!session) {
  return (
    <div className="flex items-center w-screen h-screen bg-green-900">
      <div className="text-center w-full">
        <button onClick={() => signIn('google')} className="bg-white p-4 rounded-lg">Connexion avec Google</button>
      </div>
    </div>
  );
  }

  return (
    <div className="bg-green-900 min-h-screen flex">
      <Navigation />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
    </div>
  );
}