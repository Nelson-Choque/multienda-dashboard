import { ChangeEvent, MouseEventHandler } from "react";
import LogoMultienda from "../../assets/multienda_logo_ligth.png";
import { Link } from "react-router-dom";
// * interfaces

interface IFormData {
  username: string;
  password: string;
}

interface ILoginView {
  inputError: string;
  isLogged: boolean;
  handleLogin: MouseEventHandler;
  handleFieldChange: (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof IFormData
  ) => void;
}

// * LoginView

export const LoginView = ({
  inputError,
  handleLogin,
  isLogged,
  handleFieldChange,
}: ILoginView) => {
  return (
    <div className="flex items-center min-h-screen p-4 container-app bg-gray-50">
      <div className="w-full max-w-lg px-4 py-8 mx-auto bg-white rounded-2xl">
        <img
          className="object-contain h-20 mx-auto"
          src={LogoMultienda}
          alt=""
        />
        <h2 className="mx-auto mt-4 text-2xl font-semibold text-center">
          Ingresa a tu tienda
        </h2>
        <form className="flex flex-col gap-4 mt-4" action="">
          <div className="flex flex-col gap-4">
            <label className="text-lg font-normal capitalize" htmlFor="">
              usuario
            </label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe tu nombre"
              onChange={(event) => {
                handleFieldChange(event, "username");
              }}
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
              onChange={(event) => {
                handleFieldChange(event, "password");
              }}
            />
          </div>
          <p className="text-lg font-medium text-center text-red-800">
            {inputError}
          </p>
          <button
            className="self-center w-full px-4 py-3 font-medium capitalize bg-primary"
            onClick={handleLogin}
          >
            Ingresar
          </button>
          <p className="text-center">
            no tienes una cuenta?{" "}
            <Link to={"/register"}>
              {" "}
              <span className="font-medium sky-blue-700">creala aqui</span>
            </Link>
          </p>
        </form>
        {isLogged ? <h2>El usuario se logeo perfectamente</h2> : ""}
      </div>
    </div>
  );
};
