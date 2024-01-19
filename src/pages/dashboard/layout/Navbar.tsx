import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
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
            linkTo="http://localhost:5174/"
          ></Item>
        </li>
      </ul>
    </div>
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
