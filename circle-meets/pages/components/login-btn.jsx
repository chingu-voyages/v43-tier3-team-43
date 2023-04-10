import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect} from "react";
import { PrismaClient } from "@prisma/client"


export default function Login() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user && session.user.email) {
     fetch('localhost:3000/register', {method: 'POST', body: {email: "me"}})
    }
  }, [session])
  if (session) {

    console.log('logged in')
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      You are not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
