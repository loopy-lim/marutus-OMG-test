import { Questions } from "@/components/questions";
import { Suspense } from "react";

export default function PlayPage() {
  return (
    <Suspense>
      <Questions />
    </Suspense>
  );
}
