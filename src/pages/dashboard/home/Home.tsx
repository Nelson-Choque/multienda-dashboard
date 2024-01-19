import { CardOption } from "./components/CardOption";
import iconTool from "./../../../assets/icon-tool.png";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { IUser } from "../../login/Login";
import { Navbar } from "../layout/Navbar";

export const Home = () => {
  const user: IUser | undefined = getUserLocalStorage();

  return (
    <>
      <div className="grid-dashboard ">
        <Navbar />
        <div className="w-full max-w-screen-xl p-4 mx-auto bg-sky-50">
          <div className="grid gap-4 mt-8 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-4 p-4 bg-white">
              <h2 className="text-xl font-bold">Tienda</h2>
              <div className="">
                <span className="font-bold">Url: </span>
                <a
                  className=""
                  href={`https://multiendas.netlify.app/${user?.store.id}`}
                  target="_blank"
                >
                  multiendas.netlify.app/{user?.store.id}
                </a>
              </div>
              <a
                href={`https://multiendas.netlify.app/${user?.store.id}`}
                target="_blank"
              >
                <ButtonPrimary text="Ir a la tienda" />
              </a>
            </div>
            <div className="flex flex-col items-start gap-4 p-4 bg-white">
              <h2 className="text-xl font-bold">Plan actual</h2>
              <p className="">Plan gratuito</p>
              <ButtonPrimary text="Mejorar plan" />
            </div>
          </div>
          <h2 className="mt-8 text-2xl font-bold ">Menu de opciones</h2>
          <section className="grid gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 place-items-center">
            <CardOption
              icon={iconTool}
              text="Personaliza tu tienda"
              link="store"
            />
            <CardOption
              icon={iconTool}
              text="Gestiona tus productos"
              link="product"
            />
            <CardOption
              icon={iconTool}
              text="Gestiona tus categorias"
              link="category"
            />
          </section>
        </div>
      </div>
    </>
  );
};

function getUserLocalStorage() {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }
  const parsedUser: IUser = JSON.parse(user);

  return parsedUser;
}
