import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute w-screen h-screen bg-zinc-100 dark:bg-zinc-900 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="flex flex-col h-full w-[90%] items-center justify-center">
        <h1 className="text-[5rem] lg:text-[8rem]">
          404 NOT FOUND
        </h1>
        <hr className="py-[1px] bg-zinc-900 dark:bg-zinc-100 w-full" />
        <div className="flex justify-around w-[90%] mt-4">
          <h2 className="text-3xl">Looks like you&#39;re lost here 🙁</h2>
          <hr className="px-[1px] bg-zinc-900 dark:bg-zinc-100 h-full" />
          <Link href='/' className="bg-zinc-200 dark:bg-zinc-800 rounded-full p-3">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}