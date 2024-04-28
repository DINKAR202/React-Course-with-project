import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 flex-col items-center text-white h-[44vh]">
        <div className="font-bold flex gap-2 text-5xl justify-center items-center">
          {" "}
          Buy Me a Chai{" "}
          <span>
            <img src="/tea2.gif" width={88} alt="tea gif" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {" "}
            Start now
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {" "}
            Read more
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white">
        <h1 className="text-2xl font-bold text-center my-14">
          Your fans can buy a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">Fund your self</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">Fund your self</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">Fund your self</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
