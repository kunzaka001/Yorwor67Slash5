"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <h1>Hatyaiwit M.4/5</h1>
      <h2>Powered by NEXT.JS with NEXTUI</h2>
      <Button onClick={() => router.push("/about")}>About</Button>
    </div>
  );
}
