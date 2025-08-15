import { useState } from "react";
import Menu from "../../../../../public/icons/Menu";

const menuOptions = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ", href: "#" },
];

function Main() {
  const text = "devStart();";
  const [open, setOpen] = useState(false);

  // Fecha o menu e navega para o link
  const handleMenuClick = () => { setOpen(false); };

  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-20 bg-[--color-main-background]">
        <nav class="flex justify-between items-center ml-7 mr-7 mt-6 md:ml-10 md:mr-10 md:mt-8">
          {/* Logo */}
          <span class="relative inline-block select-none">
            <span class="absolute inset-0 invisible">{text}</span>
            <p class="text-white font-main text-2xl group cursor-pointer relative">
              <span class="whitespace-nowrap relative">{text}</span>
              <span class="absolute ml-1 w-0.5 h-7 bg-white animate-pulse"></span>
            </p>
          </span>

          {/* Menu Desktop */}
          <ul className="hidden md:flex flex-1 justify-center gap-6 font-second items-center">
            {menuOptions.map((opt) => (
              <li key={opt.label}>
                <a
                  href={opt.href}
                  className="
                    relative font-light transition-all duration-150
                    after:content-[''] after:block after:absolute after:left-0 after:-bottom-2
                    after:h-[1px] after:bg-white after:rounded-full after:w-0
                    hover:after:w-full after:transition-all after:duration-500
                  "
                >
                  {opt.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Desktop */}
          <a href="#" 
            className="
              hidden md:block ml-4
              px-7 py-2.5
              bg-(--color-main-btn)
              hover:bg-(--color-main-btn-hover) transition-all ease-in duration-300
              rounded-sm
            ">
            Acessar
          </a>

          {/* Menu Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer">
            <Menu />
          </button>
        </nav>

        {/* Menu Mobile Suspenso */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Fundo opaco e blur */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300`}
            onClick={() => setOpen(false)}
          ></div>

          {/* Menu centralizado */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-6">
              {menuOptions.map((opt) => (
                <li key={opt.label}>
                  <a
                    href={opt.href}
                    className="text-2xl font-second font-light text-white transition-all duration-150 hover:font-bold"
                    onClick={() => handleMenuClick(opt.href)}
                  >
                    {opt.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Botão de fechar */}
            <button
              className="mt-10 cursor-pointer text-white text-3xl font-bold"
              onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Main;
