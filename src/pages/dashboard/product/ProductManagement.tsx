import { useEffect, useState } from "react";
import { ProductManagementView } from "./ProductManagementView";
import { ISectionCard } from "./components/SectionCard";
import { IUser } from "../../login/Login";
import { getUserLocalStorage } from "../functions/functions";
import { constans } from "../../../const/const";

//* ProductManagement

export const ProductManagement = () => {
  //* states
  const [products, setProducts] = useState<ISectionCard[]>([]);

  //* functions

  //* handleDelete

  async function handleDelete(id: number): Promise<void> {
    try {
      //* handleDelete - fetch api

      const response = await fetch(constans.API_BACKEND + "/product/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      //* handleDelete - fetch api - validations

      if (response.ok) {
        //* handleDelete - delete element of virtual dom

        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );

        //* handleDelete - delete element of virtual dom - message

        alert("Producto eliminado exitosamente");
      } else {
        console.error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
  //* useEffects

  //* get data
  useEffect(() => {
    async function getData() {
      const user: IUser = getUserLocalStorage();

      const res = await fetch(constans.API_BACKEND + "/store/" + user.store.id);

      const data = await res.json();
      setProducts(data.products);
    }
    getData();
  }, []);

  return (
    <ProductManagementView products={products} handleDelete={handleDelete} />
  );
};
