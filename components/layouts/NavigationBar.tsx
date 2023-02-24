import { useRouter } from "next/router";

export default function NavigationBar() {
  const { push } = useRouter();

  const changePage = (str: string) => {
    push(str);
  };

  return (
    <div className="px-8 py-4 flex flex-row justify-between items-center">
      <div
        className="flex flex-row items-center gap-x-2 hover:cursor-pointer"
        onClick={() => changePage("/")}
      >
        <img src="/images/logos/tgnp-white-logo.png" className="w-20" />
        <div className="font-bold text-2xl">Bunge Monitoring Platform</div>
      </div>
      <div className="flex flex-row justify-around items-center gap-x-8 font-semibold text-lg">
        <div
          onClick={() => changePage("/posts")}
          className="hover:cursor-pointer hover:underline"
        >
          Posts
        </div>
        <div
          onClick={() => changePage("/about")}
          className="hover:cursor-pointer hover:underline"
        >
          About
        </div>
      </div>
    </div>
  );
}
