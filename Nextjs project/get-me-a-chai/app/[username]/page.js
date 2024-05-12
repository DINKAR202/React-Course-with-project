import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="w-full cover relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1717459200&token-hash=b5fK345liFbxiFSjKhhIL7-xnygYT7EXrRWE65Zgf1Q%3D"
          alt=""
        />
        <div className="absolute -bottom-5 right-[47%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={85}
            height={85}
            src="https://imgs.search.brave.com/jGcVc1pFWnnV8-CtcTh31c_V16SXbj3V7hqOQI6901Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk1Lzk0Lzk0/LzM2MF9GXzI5NTk0/OTQ4NF84QnJsV2tU/clBYVFl6Z01uM1Vl/YkRsMU8xM1BjVk5N/VS5qcGc"
            alt=""
          />
        </div>
      </div>
      <div className="text-white info flex justify-center items-center my-6 flex-col gap-2">
        <div className="font-bold text-lg">
        @{params.username}
        </div>
        <div className="text-slate-400">
          erkjdbgnvkdjf,x
        </div>
        <div className="text-slate-400">
wejsbfcx
        </div>
        <div className="payment flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-10">
            {/* show list of all the supporters as a leaderboard  */}
            <h2 className="text-lg font-bold my-5">Heading</h2>
            <ul>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
              <li className="my-2">Shubham donated $30 with a message ""</li>
            </ul>
          </div>
          <div className="makePayments w-1/2 bg-slate-900 text-white rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make a payments</h2>
            <div className="flex gap-2">
                <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount"/>
                <button className="bg-slate-800 p-3 rounded-lg">Pay</button>
            </div>
            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
