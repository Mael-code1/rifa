"use client";
import { useEffect } from "react";

export function Loagreset() {
  useEffect(() => {
    const andleloker = (e: KeyboardEvent) => {
      console.log(e);
    };
    window.addEventListener("keypress", andleloker);
    return () => {
      window.removeEventListener("keypress", andleloker);
    };
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}
