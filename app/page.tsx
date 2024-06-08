import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute min-h-screen w-[420px] right-24 bg-white flex justify-center items-center">
      <Button variant="secondary">
        <Link href="/play">TEST</Link>
      </Button>
    </div>
  );
}
