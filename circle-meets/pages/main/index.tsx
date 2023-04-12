import React from "react";
import FriendCard from "../components/FriendCard";
import Header from "../components/Header";
import { PrismaClient } from "@prisma/client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// TODO: Replace with db friends
const friends = [
  {
    id: 0,
    name: "Jody Anderson",
    photoURL: "",
    online: true,
  },
  {
    id: 1,
    name: "Jody Anderson",
    photoURL: "",
    online: false,
  },
  {
    id: 2,
    name: "Jody Anderson",
    photoURL: "",
    online: false,
  },
  {
    id: 3,
    name: "Jody Anderson",
    photoURL: "",
    online: false,
  },
  {
    id: 4,
    name: "Jody Anderson",
    photoURL: "",
    online: false,
  },
  {
    id: 5,
    name: "Jody Anderson",
    photoURL: "",
    online: false,
  },
];

const prisma = new PrismaClient()

function Main() {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) router.push("/")

  return (
    <div className="flex flex-col flex-wrap min-h-screen bg-communixWhite font-dm white-grid">
      <>
        <Header />
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  gap-4 sm:gap-10 m-2 sm:m-7">
          {friends.map((friend) => {
            return <FriendCard key={friend.id} {...friend} />;
          })}
        </div>
      </>
    </div>
  );
}

export default Main;

export async function getStaticProps(email) {
  const users = await prisma.conversation.findMany({
    where: {
      userId: {
        email: email
      }
    }
  })
  return {
      props: { users: users}
  }
}

