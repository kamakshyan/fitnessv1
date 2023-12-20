import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <Component {...pageProps} />
  );
}
