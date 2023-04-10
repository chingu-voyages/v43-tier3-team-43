import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function RegisterButton() {
  const { data: session } = useSession();
  if (session) {
    console.log(session.user)
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
      <button onClick={() => signIn()}>Register</button>
    </>
  );
}
