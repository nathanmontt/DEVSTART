import { useRef, useState } from "react";
import Menu from "../../../../../public/icons/Menu";
import Book from "../../../../../public/icons/Book";

const menuOptions = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ", href: "#" },
];

function Main() {
  const text = "devStart();";
  const [open, setOpen] = useState(false);

  // Rolagem suave
  const aboutRef = useRef(null);

  // Fecha o menu e navega para o link
  const handleMenuClick = () => { setOpen(false); };

  // Função para scroll suave até a seção "about"
  const handleExploreClick = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header
        class="
          fixed top-0 left-0 right-0 z-20 
          bg-[--color-main-background]
      ">
        <nav
          class="
            flex justify-between items-center
            mx-7 mt-6
            md:mx-20 md:mt-10
        ">
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
            Entrar
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
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300`}
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

      <main>
        <div id="container-general">
          <div id="container-central-text-info"
            class="
              h-dvh
              flex flex-col justify-center items-center
          ">
            <section id="container-top-saying">
              <div
                className="container-wrap"
                class="
                  border-1
                  mb-1
                  border-gray-500
                  p-1.5 rounded-sm
                  flex items-center justify-center
                ">
                  <p className="community"
                    class="
                      text-[10px]
                      text-(--color-paragraph)
                  ">
                      Um Espaço Para Novos Devs
                    </p>
                  <span class="mx-2 text-(--color-paragraph)">|</span>
                  <Book />
              </div>
            </section>

            <section id="hero-section" class="p-4">
              <div className="container-hero-section">
                <div className="container-texts">
                  <h1
                    className="project-slogan"
                    class="
                      text-5xl text-center
                  ">
                    Te iniciando no <em>dev</em>!
                  </h1>
                  <p
                    className="projetct-description"
                    class="
                      text-center
                      font-light
                      text-(--color-paragraph)
                      my-7 w-65
                      m-auto
                  ">
                      Perdido em tecnologia e sem saber se situar? Não se preocupe: DevStart está aqui para te dar uma mãozinha. Clique em <span className="text-white font-semibold">"Entrar no Servidor"</span> e descubra um mundo de possibilidades!</p>
                </div>

                <section className="container-btns-cta"
                  class="
                    flex flex-col gap-3 justify-center
                    text-center
                    w-65 md:w-full m-auto
                    mt-8

                    md:inline-block
                ">
                  <a 
                    href=""
                    class="
                      px-5 py-2
                      bg-(--color-main-btn)
                      hover:bg-(--color-main-btn-hover) transition-all ease-in duration-300
                      rounded-sm

                      md:px-10 md:py-3
                      md:mr-5
                  ">
                    Entrar no Servidor
                  </a>
                  
                  <a href="#Sobre"
                    onClick={handleExploreClick}
                    class="
                    px-5 py-2
                    bg-(--color-secondary-btn)
                    hover:bg-(--color-secondary-btn-hover) transition-all ease-in duration-300
                    rounded-sm

                    md:px-10 md:py-3
                  ">
                    Explorar
                  </a>
                </section>
              </div>
            </section>
          </div>


          <section id="Sobre" ref={aboutRef}>
            <div className="flex flex-col gap-10 items-center w-65 md:w-180 mx-auto lg:w-300">
              {/* Card 1: card left, text right */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-15 mb-10">
                <div
                  className="
                    relative
                    rounded-xl
                    border border-white/10
                    bg-gradient-to-br from-[#23243a]/80 via-[#18192a]/80 to-[#18192a]/100
                    backdrop-blur-md
                    shadow-xl
                    w-65 h-58
                    flex justify-center items-center
                    overflow-hidden
                  "
                >
                  <img src="/images/discord.png" alt="Ícone do Discord" className="w-13" />
                  <img src="/images/plus.png" alt="Ícone do Símbolo Mais/Adição" className="mx-5 w-7" />
                  <img src="/images/code.png" alt="Ícone de Código/Tag HTML" className="w-13" />
                </div>
                <div className="flex-1">
                  <h1 className="font-main text-3xl md:text-4xl font-semibold text-center md:text-left mb-3">
                    Mais que um servidor!
                  </h1>
                  <p className="text-center md:text-left text-(--color-paragraph)">
                    A iniciativa <span className="text-white font-main text-lg font-bold group">devStart();</span> é uma comunidade colaborativa e gratuita criada para ajudar iniciantes que nunca programaram a darem os primeiros passos na área, sempre com o suporte de uma comunidade ativa!
                  </p>
                </div>
              </div>

              {/* Card 2: text left, card right */}
              <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-15 mb-10">
                <div
                  className="
                    relative
                    rounded-xl
                    border border-white/10
                    bg-gradient-to-br from-[#23243a]/80 via-[#18192a]/80 to-[#18192a]/100
                    backdrop-blur-md
                    shadow-xl
                    w-65 h-58
                    flex justify-center items-center
                    overflow-hidden
                  "
                >
                  <img src="/images/html.png" alt="Ícone de HTML5" className="w-9" />
                  <img src="/images/css-3.png" alt="Ícone de CSS3" className="mx-5 w-9" />
                  <img src="/images/javascript.png" alt="Ícone de JavaScript" className="w-9" />
                  <img src="/images/github.png" alt="Ícone de Github" className="ml-5 w-9" />
                </div>
                <div className="flex-1">
                  <h1 className="font-main text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
                    Aprenda sobre a Web!
                  </h1>
                  <p className="text-center md:text-left text-(--color-paragraph)">
                    Domine o básico de desenvolvimento web e ganhe autonomia para criar por conta própria — <strong>com HTML, CSS, JavaScript, Git</strong>, e muito mais!
                  </p>
                </div>
              </div>

              {/* Card 3: card left, text right */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-15 mb-10">
                <div
                  className="
                    relative
                    rounded-xl
                    border border-white/10
                    bg-gradient-to-br from-[#23243a]/80 via-[#18192a]/80 to-[#18192a]/100
                    backdrop-blur-md
                    shadow-xl
                    w-64 h-52
                    flex justify-center items-center
                    overflow-hidden
                  "
                >
                  <img src="/images/communities.png" alt="Comunidade Conectada" className="w-25" />

                </div>
                <div className="flex-1">
                  <h1 className="font-main text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
                    Comunidade ativa!
                  </h1>
                  <p className="text-center md:text-left text-(--color-paragraph)">
                    Todos estão começando, então nada melhor do que participar de discussões enriquecedoras, tirar dúvidas com moderadores e com outros participantes e compartilhar o conhecimento aprendido com outros <em>devs</em> iniciantes. <strong>Aqui você nunca estará sozinho!</strong>
                  </p>
                </div>
              </div>

              {/* Card 4: text left, card right */}
              <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-15">
                <div
                  className="
                    relative
                    rounded-xl
                    border border-white/10
                    bg-gradient-to-br from-[#23243a]/80 via-[#18192a]/80 to-[#18192a]/100
                    backdrop-blur-md
                    shadow-xl
                    w-64 h-52
                    flex justify-center items-center
                    overflow-hidden
                  "
                >
                  <img src="/images/connect.png" alt="" className="w-30" />
                </div>
                <div className="flex-1">
                  <h1 className="font-main text-3xl md:text-4xl font-semibold text-center md:text-left mb-2">
                    Participe Agora!
                  </h1>
                  <p className="text-center md:text-left text-(--color-paragraph)">
                    Começar não é fácil, e muitas vezes sozinho pode ser difícil, mas com a comunidade está aqui para facilitar o seu caminho. Junte-se à <span className="text-white font-main text-lg font-bold group">devStart();</span>: <strong>um espaço colaborativo onde cada linha de código que você escreve te aproxima mais de um futuro promissor!</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
