import { useNavigate } from "react-router-dom";
import {
  ButtonOutline,
  ButtonPrimary,
} from "../../../components/ButtonPrimary";

import imgHeader from "./../../../assets/img_header_dashboard.png";
import { RefObject } from "react";

export const Header = ({
  planesRef,
}: {
  planesRef: RefObject<HTMLDivElement>;
}) => {
  const navigate = useNavigate();

  return (
    <header className="grid min-h-screen-85 bg-sky-50 place-items-center">
      <div className="container mx-auto">
        <section className="grid items-center content-center justify-center p-4 lg:grid-cols-2 min-h-screen-90">
          <article className="flex flex-col order-2 gap-4 lg:order-1">
            <h2 className="text-4xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Muestra tus productos a todo el mundo
            </h2>
            <p className="text-xl">
              comienza gratis, crea tu tienda y empieza a vender
            </p>
            <div className="flex gap-4">
              <ButtonPrimary
                text="comenzar"
                callback={() => {
                  navigate("/register");
                }}
              />
              <ButtonOutline
                text="ver planes"
                callback={() => {
                  planesRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </article>

          <article className="order-1 lg:order-2">
            <img className="p-4" src={imgHeader} alt="" />
          </article>
        </section>
      </div>
    </header>
  );
};
