import { RefObject } from "react";
import { ButtonOutline, ButtonPrimary } from "../components/ButtonPrimary";
import logoMultienda from "./../assets/multienda_logo_ligth.png";
import { Link } from "react-router-dom";

export const Navbar = ({
  planesRef,
}: {
  planesRef: RefObject<HTMLDivElement>;
}) => {
  const phoneNumber = "916613970"; // Reemplaza con tu número de teléfono
  const message = "Hola, estoy interesado en crear mi tienda.";

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <nav className="sticky top-0 z-20 bg-transparent bg-white">
      <div className="container mx-auto ">
        <div className="items-center justify-center p-4 grid-navbar">
          <div className="ml-4 place-self-start">
            <img
              className="object-cover h-16 "
              src={logoMultienda}
              alt="logo multienda"
            />
          </div>
          <input
            className="absolute invisible "
            type="checkbox"
            name=""
            id="menu"
          />
          <label htmlFor="menu" className="place-self-end lg:hidden">
            <i className="p-4 lg:hidden fa-solid fa-bars icon "></i>
          </label>
          <ul
            id="menuMobile"
            style={{ top: "100%" }}
            className="absolute items-center justify-center hidden w-full col-span-2 gap-4 mx-auto lg:col-span-1 lg:flex lg:flex-row lg:w-max lg:static"
          >
            <li
              className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Inicio
            </li>
            <li
              className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary"
              onClick={() => {
                planesRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Planes
            </li>
            <li
              className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary"
              onClick={handleWhatsAppClick}
            >
              Contactanos
            </li>
          </ul>
          <section className="flex-wrap justify-end hidden gap-4 lg:flex">
            <Link to={"/login"}>
              <ButtonOutline text="Ingresar" />{" "}
            </Link>

            <Link to={"/register"}>
              {" "}
              <ButtonPrimary text="crea tu tienda" />
            </Link>
          </section>
        </div>
      </div>
    </nav>
  );
};
