import { Result } from "@/components/result";
import { QUESTIONS } from "@/constants/questions";
import { redirect } from "next/navigation";

interface ResultProps {
  searchParams: { [key: string]: string };
}

export default function ResultPage({ searchParams }: ResultProps) {
  const answers = Array.from(
    { length: QUESTIONS.length },
    (_, i) => searchParams[i.toString()]
  );
  if (!answers.every((v) => v != null)) {
    searchParams["selected"] = answers.findIndex((v) => v == null).toString();
    const paramString = Object.keys(searchParams)
      .map((key) => `${key}=${searchParams[key]}`)
      .join("&");
    redirect(`/play?${paramString}`);
  }

  return (
    <div className="md:w-[420px]">
      <Result result={answers} />
    </div>
  );
}
