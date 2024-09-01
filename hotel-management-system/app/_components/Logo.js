import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img
        src="/logo.png"
        height="60"
        width="60"
        alt="Hotel Management System Logo"
      />
      <span className="text-xl font-semibold text-white ">
        Hotel Management System
      </span>
    </Link>
  );
}

export default Logo;
