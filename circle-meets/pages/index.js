import Head from "next/head";
import { useSession, } from "next-auth/react";

import { useRouter } from "next/router";
import { useState } from "react";
import Login from "./components/login-btn";
import Register from './components/Register'
import { redirect } from "express/lib/response";

export default function Home() {
  const [parent, setParent] = useState(null);
  const [roomName, setRoomName] = useState("");
  const { data: session } = useSession();

  const router = useRouter();

  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`);
  };
  if (session) router.redirect("/main")
  
  return (
    <div>
      <h1>PUT SPLASHPAGE HERE</h1>
    </div>
  )

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}
