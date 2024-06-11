import { QuestionBlocks } from "@/components/questions";
import { Suspense } from "react";

export default function PlayPage() {
  return (
    <Suspense>
      <QuestionBlocks />
    </Suspense>
  );
}
