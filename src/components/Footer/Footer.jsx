const Footer = () => {
  return (
    <footer className="mt-[60px] w-full border-t border-gray-200 bg-white/70 py-6 text-center text-sm leading-relaxed text-gray-600">
      <p className="hidden md:inline">
        © 2025 Rolling Paper Team&nbsp;|&nbsp;FE19 Team 8&nbsp;|&nbsp;문의: s0912135@gmail.com
      </p>

      <div className="flex flex-col md:hidden">
        <span>© 2025 Rolling Paper Team</span>
        <span>FE19 Team 8</span>
        <span>문의: s0912135@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
