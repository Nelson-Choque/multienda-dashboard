import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { SectionCard, ISectionCard } from "./components/SectionCard";
import { Navbar } from "../layout/Navbar";

interface Props {
  products: ISectionCard[];
  handleDelete: (id: number) => Promise<void>;
}

export const ProductManagementView = ({ products, handleDelete }: Props) => {
  return (
    <>
      <div className="grid-dashboard">
        <Navbar />
        <div className="w-full max-w-screen-xl p-4 mx-auto overflow-hidden">
          <h2 className="my-4 text-3xl font-bold capitalize">
            gestiona tus productos
          </h2>
          <p className="my-4 text-lg">
            agregar, modifica o elimina tus productos
          </p>
          <Link to={"/dashboard/product/add"}>
            <ButtonPrimary text="Agregar producto" />
          </Link>

          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md-grid-cols-4 lg:grid-cols-5">
            {products.map((e: ISectionCard) => (
              <>
                <div className="">
                  <SectionCard
                    id={e.id}
                    name={e.name}
                    brand={e.brand}
                    price={e.price}
                    imgUrl={e.imgUrl}
                  />
                  <div className="flex flex-wrap gap-4 p-4">
                    {/* <Link to={"/home/product/edit"}>
                      <i className="text-2xl fa-solid fa-pen-to-square"></i>
                    </Link> */}
                    <i
                      className="text-2xl text-black rounded-2xl fa-solid fa-trash"
                      onClick={() => handleDelete(e.id)}
                    ></i>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
