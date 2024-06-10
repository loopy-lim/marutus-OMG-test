interface QuestionProgressBarProps {
  index: number;
  total: number;
}

export const QuestionProgressBar = ({
  index,
  total,
}: QuestionProgressBarProps) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full ${
            i === index ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
