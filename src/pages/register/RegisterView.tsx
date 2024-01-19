import { ChangeEvent, FormEventHandler } from "react";
import LogoMultienda from "../../assets/multienda_logo_ligth.png";
import { Link } from "react-router-dom";

//* interfaces
interface IProps {
  handleFieldChange: (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  handleRegister: FormEventHandler<HTMLFormElement>;
}

//* RegisterView

export const RegisterView = ({ handleFieldChange, handleRegister }: IProps) => {
  return (
    <div className="flex items-center min-h-screen p-4 container-app bg-gray-50">
      <div className="w-full max-w-lg px-4 py-8 mx-auto bg-white rounded-2xl">
        <img
          className="object-contain h-20 mx-auto"
          src={LogoMultienda}
          alt=""
        />
        <h2 className="mt-4 text-2xl font-semibold text-center">
          Crear tienda
        </h2>
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={handleRegister}
        >
          <div className="flex flex-col gap-4">
            <label className="text-lg font-normal capitalize" htmlFor="">
              usuario
            </label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe tu nombre"
              onChange={(event) => handleFieldChange(event, "username")}
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-lg font-normal capitalize" htmlFor="">
              contraseña
            </label>
            <input
              className="p-4 bg-cyan-50"
              type="password"
              placeholder="escribe tu contraseña"
              required
              onChange={(event) => handleFieldChange(event, "password")}
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-lg font-normal " htmlFor="">
              Nombre de la tienda
            </label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe el nombre de la tienda"
              required
              onChange={(event) => handleFieldChange(event, "storeName")}
            />
          </div>

          <p className="text-center text-red-800">{}</p>

          <button className="self-center w-full px-4 py-3 font-medium capitalize bg-primary">
            Registrarse
          </button>
          <p className="text-center">
            ya tienes una cuenta?{" "}
            <Link to={"/login"}>
              {" "}
              <span className="font-medium sky-blue-700">ingresa aqui</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
