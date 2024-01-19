import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-20 bg-transparent bg-white sm:hidden">
        <div className="container mx-auto ">
          <div className="items-center justify-center p-4 grid-navbar">
            <div className="ml-4 place-self-start">
              <img
                className="object-cover h-16 "
                src="/multienda_logo_ligth.png"
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
              <Link to={"/dashboard/"}>
                <li className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary">
                  Inicio
                </li>
              </Link>
              <Link to={"/dashboard/store"}>
                <li className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary">
                  Tienda
                </li>
              </Link>
              <Link to={"/dashboard/product"}>
                <li className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary">
                  Productos
                </li>
              </Link>
              <Link to={"/dashboard/category"}>
                <li className="p-4 transition-all border-b-4 border-transparent cursor-pointer hover:border-primary">
                  Categorias
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar */}
      <div className="hidden h-screen px-4 py-16 sm:grid">
        <ul className="p-4">
          <li className="relative inline-flex flex-col gap-4 py-16 rounded-full bg-primary">
            <Item
              icon={"fa-solid fa-house"}
              title={"Inicio"}
              linkTo="/dashboard/"
            ></Item>
            <Item
              icon={"fa-solid fa-store"}
              title={"Tienda"}
              linkTo="/dashboard/store/"
            ></Item>
            <Item
              icon={"fa-solid fa-boxes-stacked"}
              title={"Productos"}
              linkTo="/dashboard/product/"
            ></Item>
            <Item
              icon={"fa-solid fa-tags"}
              title={"Categorias"}
              linkTo="/dashboard/category"
            ></Item>
            <Item
              icon={"fa-solid fa-user"}
              title={"Cerrar Sesion"}
              linkTo={"/"}
            ></Item>
          </li>
        </ul>
      </div>
    </>
  );
};

interface Props {
  icon: string;
  title: string;
  linkTo: string;
}

function Item({ icon, title, linkTo }: Props) {
  return (
    <Link to={linkTo}>
      <div className="relative flex px-4 text-white cursor-pointer group rounded-2xl hover:bg-primary-500">
        <i className={`${icon} icon p-4`}></i>
        <div className="absolute hidden pl-2 left-full group-hover:block">
          <p className="p-4 w-max bg-primary rounded-2xl">{title}</p>
        </div>
      </div>
    </Link>
  );
}
