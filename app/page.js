"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const openlink = () => {
  window.open("https://google.com");
  // console.log("Hello");
}

export default function Home() {
  return (
    <div>
      <h2>Hello for interview mocker</h2>
      <Button onClick={openlink}>Click me</Button>
    </div>
  );
}
