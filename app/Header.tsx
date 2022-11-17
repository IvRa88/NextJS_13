import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-slate-600">
      <Link href="/" className="px-2 py-1 bg-white text-slate-600 rounded-lg">
        Home
      </Link>
    </header>
  );
}

export default Header;
