"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="md:w-[420px] flex justify-center items-center h-full flex-col gap-4 p-4">
      <h3 className="font-bold text-2xl my-4">마르투스 OMG</h3>
      <div className="break-keep text-pretty">
        OMG 테스트를 통해 나의 성향을 알아보자!
      </div>
      <img src="/images/title2.jpeg" alt="main" className="w-full rounded-md" />
      <div className="font-light">이름을 넣고 TEST를 누르면 시작합니다.</div>
      <Input
        type="text"
        className="py-2"
        placeholder="김마르투스"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="secondary">
        <Link href={`/play?name=${name.length ? name : "김마루투스"}`}>
          TEST 하기
        </Link>
      </Button>
    </div>
  );
}
