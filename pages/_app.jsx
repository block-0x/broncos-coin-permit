import { useWallet } from "../hooks/useWallet";
import "../styles/globals.css";
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  const { address } = useWallet();
  return (
    <div>
      <div className="border-b p-6">
        connect wallet address: {address}
        <br></br>
        <Link href="/">
          <a>Top</a>
        </Link>
        <br></br>
        <Link href="/MakePermitData">
          <a>MakePermitData</a>
        </Link>
      </div>{" "}
      <Component {...pageProps} />{" "}
    </div>
  );
};

export default MyApp;
