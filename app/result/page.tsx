import { Result } from "@/components/result";
import { Suspense } from "react";

export default function ResultPage() {
  return (
    <div className="md:w-[420px]">
      <Suspense>
        <Result />
      </Suspense>
    </div>
  );
}
