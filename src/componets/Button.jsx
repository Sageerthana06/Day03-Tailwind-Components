function Button({ children, variant = "primary" }) {
  const baseStyle =
    "px-7 py-3 rounded-full font-medium transition duration-300";

  const variants = {
    primary: "bg-[#064e4b] text-white hover:bg-teal-800",

    outline: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>{children}</button>
  );
}

export default Button;
