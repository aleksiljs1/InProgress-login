function Footer() {
  return (
    <footer className="w-full bg-violet-800 text-white py-4 text-center shadow-lg mt-auto">
      <div className="flex flex-col items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} - UniHub</p>
        <p className="text-sm font-semibold">
          It is 3 am and its finally at the bottom, choose UniHub.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
