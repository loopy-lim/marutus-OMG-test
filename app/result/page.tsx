import { Result } from "@/components/result";
import { QUESTIONS } from "@/constants/questions";
import { redirect } from "next/navigation";

interface ResultProps {
  searchParams: { [key: string]: string };
}

export default function Home({ searchParams }: ResultProps) {
  const paramString = Object.keys(searchParams)
    .map((key) => `${key}=${searchParams[key]}`)
    .join("&");

  if (
    !Array.from(
      { length: QUESTIONS.length },
      (_, i) => searchParams[i.toString()]
    ).every((v) => v != null)
  ) {
    redirect(`/play?${paramString}`);
  }

  return (
    <div className="absolute min-h-screen w-[420px] right-24 bg-white">
      <Result />
    </div>
  );
}
