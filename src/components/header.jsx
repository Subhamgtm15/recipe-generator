import header from "../headerimage.png"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-center items-center gap-4 p-6 sm:p-8 border-b-2 border-gray-100 shadow-md bg-white">
      <img
        src={header}
        alt="Chef Claude logo"
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-inter">
        Chef Claude
      </h1>
    </header>
  );
}

export default Header;
