import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:w-[420px] flex justify-center items-center h-full">
      <Button variant="secondary">
        <Link href="/play">TEST</Link>
      </Button>
    </div>
  );
}
