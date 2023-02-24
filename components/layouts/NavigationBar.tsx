import Link from "next/link";
import React from "react";

export default function NavigationBar() {
  return (
    <div className="px-8 py-4 flex flex-row justify-between items-center">
      <Link href="/">
        <div className="flex flex-row items-center gap-x-2">
          <img src="/images/logos/tgnp-white-logo.png" className="w-20" />
          <div className="font-bold text-2xl">Bunge Monitoring Platform</div>
        </div>
      </Link>
      <div className="flex flex-row justify-around items-center gap-x-8 font-semibold text-lg">
        <p>Posts</p>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
