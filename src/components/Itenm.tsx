"use client";

import { useEffect, useState } from "react";

interface ItemProps {
  id: number;
}

export default function Itenm({ id }: ItemProps) {
  const [presed, setpresed] = useState(false);
  const hadleOnclick = () => {
    setpresed(true);
    window.localStorage.setItem(id.toString(), "true");
  };
  useEffect(() => {
    const andleloker = (e: StorageEvent) => {
      if (e.key == id.toString() && e.newValue == "true") {
        setpresed(true);
      }
    };
    window.addEventListener("storage", andleloker);
    const getdleker = window.localStorage.getItem(id.toString());
    if (getdleker == "true") {
      setpresed(true);
    }

    return () => {
      window.removeEventListener("storage", andleloker);
    };
  }, []);
  return (
    <button
      className="flex justify-center items-center bg-teal-500 aspect-square p-2"
      onClick={hadleOnclick}
    >
      {presed ? "😁" : id + 1}
    </button>
  );
}
