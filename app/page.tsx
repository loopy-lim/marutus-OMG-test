import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:w-[420px] flex justify-center items-center h-full flex-col gap-4">
      <h3 className="font-bold text-2xl my-4">마르투스 OMG</h3>
      <div className="break-keep text-pretty">
        OMG 테스트를 통해 나의 성향을 알아보자!
      </div>
      <img src="/images/title2.jpeg" alt="main" className="w-full" />
      <div className="font-light">TEST를 누르면 시작합니다.</div>
      <Button variant="secondary">
        <Link href="/play">TEST</Link>
      </Button>
    </div>
  );
}
