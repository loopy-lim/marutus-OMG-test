interface QuestionProgressBarProps {
  index: number;
  total: number;
}

export const QuestionProgressBar = ({
  index,
  total,
}: QuestionProgressBarProps) => {
  return (
    <div className="w-4/5 bg-gray-300 rounded-full mx-auto">
      <div
        className="h-1 rounded-full bg-blue-300 w-full transition-all duration-500 ease-in-out"
        style={{
          width: `${(100 * index) / (total - 1)}%`,
          willChange: "width",
        }}
      ></div>
    </div>
  );
};
