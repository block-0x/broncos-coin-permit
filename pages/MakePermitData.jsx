import React, { useState } from "react";
import {
  initWallet,
  permit
} from "../services/service";
import Image from "next/image";

const MakePermitData = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setamount] = useState(10);

  const [
    permitTx,
    setPermitTx,
  ] = useState(undefined);

  const bundlePermit = async () => {
    console.log("bundlePermit()");
    setLoading(true);
    let result;

    try {
      const provider = await initWallet();
      result = await permit(provider, amount);
    } catch (error) {
      result = error
    }

    console.log("result: ", result);
    setPermitTx(result);
    setLoading(false);
  };

  return (
    <div
      className={`flex justify-center flex-col items-center mt-4 demo-page p-4`}
    >
      <div className="text-4xl font-bold text-center"> MakePermitData </div>{" "}
      <div className="flex flex-col pb-12 w-full border-t border-black pt-4">
        <div>
          <span className="font-bold"> Permit amount: </span>{" "}
          <input
            defaultValue={amount}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md"
            onChange={(e) => setamount(e.target.value)}
          />{" "}
        </div>{" "}

        <div className="flex">
          <button
            onClick={() => bundlePermit()}
            className="flex-1 font-bold mt-4 bg-cyan-500 text-white rounded p-4 shadow-lg"
          >
            Permit{" "}
          </button>{" "}
        </div>{" "}
        {JSON.stringify(permitTx)}
      </div>{" "}
      {loading && (
        <div className="spinner">
          <Image src="/spinner.svg" width="60px" height="60px" alt="spinning" />
        </div>
      )}{" "}
    </div>
  );
};

export default MakePermitData;
