export const HomeDescription = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-4">
      <div className="flex flex-col gap-4 text-center items-center">
        <h3 className="font-bold text-2xl my-8">마르투스 OMG</h3>
        <div className="break-keep text-pretty">
          OMG 테스트를 통해 나의 성향을 알아보자!
        </div>
        <img
          src="https://placehold.co/400"
          alt="tmp"
          className="w-64 rounded-lg"
        />
      </div>
    </div>
  );
};
