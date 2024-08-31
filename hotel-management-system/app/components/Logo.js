function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img
        src="/icon.jpg"
        height="60"
        width="60"
        alt="Hotel Management System Logo"
      />
      <span className="text-xl font-semibold text-white ">
        Hotel Management System
      </span>
    </a>
  );
}

export default Logo;
