import { Dispatch, SetStateAction, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimaryFull } from "../../../../components/ButtonPrimary";

interface Iprops {
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setBrand: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<number>>;
  setImage: Dispatch<SetStateAction<File | null>>;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  name: string;
  description: string;
  price: number;
  brand: string;
  image: File | null;
}

export const AddProductView = ({
  setName,
  setDescription,
  setBrand,
  setPrice,
  setImage,
  handleFormSubmit,
  name,
  description,
  brand,
  price,
}: Iprops) => {
  return (
    <div className="">
      <section className="max-w-xl mx-auto bg-white p-4 mt-4 rounded-2xl">
        <h2 className="my-4 text-2xl font-bold">Agregar producto</h2>

        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="">Nombre</label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe el nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Descripcion</label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe la descripcion"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Marca</label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe el nombre de la marca"
              value={brand}
              required
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Precio</label>
            <input
              className="p-4 bg-cyan-50"
              type="text"
              placeholder="escribe el precio del producto"
              value={price}
              required
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Imagen</label>
            <input
              className="p-4"
              required
              type="file"
              placeholder="escribe el precio del producto"
              onChange={(e) => {
                setImage(e.target.files![0]);
              }}
            />
          </div>
          <div className="grid grid-cols-2  flex-wrap gap-4">
            <ButtonPrimaryFull text="guardar" />
            <Link to={"/dashboard/product"}>
              <ButtonPrimaryFull text="volver" />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};
