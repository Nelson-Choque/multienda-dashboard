import { ChangeEvent, MouseEvent } from "react";
import {
  ButtonPrimary,
  ButtonPrimaryFull,
} from "../../../components/ButtonPrimary";
import { Link } from "react-router-dom";
import { Navbar } from "../layout/Navbar";

// * interfaces
interface IformData {
  telefono: number | string;
  nameStore: string;
  description: string;
  urlLogo: string;
}
interface IProps {
  backgroundColor: string;
  handleBackground: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTextColor: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  formData: IformData;
}
// * StoreManagementView

export const StoreManagementView = ({
  backgroundColor,
  handleBackground,
  // handleTextColor,
  handleSubmit,
  handleInputChange,
  formData,
}: IProps) => {
  return (
    <>
      <div className="grid-dashboard">
        <Navbar />
        <div className="w-full py-4 mx-auto">
          <section className="grid w-full max-w-xl grid-cols-1 gap-4 p-4 mx-auto mt-4 bg-white">
            <article>
              <h2 className="my-4 text-2xl font-bold">Personaliza tu tienda</h2>

              <form className="flex flex-col gap-4" action="">
                <div className="flex flex-col gap-4">
                  <label htmlFor="">Nombre de la pagina</label>
                  <input
                    className="p-4 bg-cyan-50"
                    type="text"
                    placeholder="escribe el nombre"
                    value={formData.nameStore}
                    onChange={(e) => handleInputChange(e, "nameStore")}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="">Descripcion de la pagina</label>
                  <input
                    className="p-4 bg-cyan-50"
                    type="text"
                    placeholder="escribe la descripcion"
                    onChange={(e) => handleInputChange(e, "description")}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="">Numero de la tienda</label>
                  <input
                    className="p-4 bg-cyan-50"
                    value={formData.telefono}
                    type="number"
                    placeholder="escribe el numero de la tienda"
                    onChange={(e) => handleInputChange(e, "telefono")}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="">Logo de la pagina</label>
                  <img
                    className="w-full max-w-xs"
                    src={formData.urlLogo}
                    alt=""
                  />
                  <input
                    className="flex p-4 bg-cyan-50"
                    type="file"
                    onChange={(e) => handleInputChange(e, "logo")}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="">Color de la tienda:</label>
                  <input
                    onChange={handleBackground}
                    type="color"
                    value={backgroundColor}
                  />
                </div>
                <div className="">
                  <ButtonPrimary
                    text={"texto de ejemplo"}
                    background={backgroundColor}
                    callback={(e: MouseEvent) => e.preventDefault()}
                  />
                </div>
                {/* <div className="flex flex-col gap-4">
                <label htmlFor="">Color de texto:</label>
                <input type="color" onChange={handleTextColor} />
              </div> */}

                <div className="grid grid-cols-2 gap-4">
                  <ButtonPrimaryFull
                    text="Actualizar"
                    callback={handleSubmit}
                  />

                  <Link className="" to={"/dashboard/"}>
                    <ButtonPrimaryFull text="volver" />
                  </Link>
                </div>
              </form>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};
