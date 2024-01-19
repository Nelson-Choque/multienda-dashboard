import { useState, FormEvent } from "react";
import { AddProductView } from "./AddProductView";
import { getUserLocalStorage } from "../../functions/functions";
import { IUser } from "../../../login/Login";
import { constans } from "../../../../const/const";

export const AddProduct = () => {
  //* useStates
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);

  //* functions

  //* handleFormSubmit - POST

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    //* handleFormSubmit - cancel event

    event.preventDefault();

    try {
      //* handleFormSubmit - fetch api product - POST
      const user: IUser = getUserLocalStorage();

      const formDataSend: FormData = new FormData();

      formDataSend.append("name", name);
      formDataSend.append("description", description);
      formDataSend.append("brand", brand);
      formDataSend.append("price", price + "");
      formDataSend.append("storeId", user.store.id + "");
      if (image) {
        formDataSend.append("image", image);
      }
      const response = await fetch(constans.API_BACKEND + "/product", {
        method: "POST",
        body: formDataSend,
      });

      //* handleFormSubmit - validations

      if (response.ok) {
        alert("Producto creado exitosamente");
      } else {
        console.error("Error al crear el producto");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  return (
    <AddProductView
      brand={brand}
      description={description}
      name={name}
      price={price}
      handleFormSubmit={handleFormSubmit}
      setBrand={setBrand}
      setDescription={setDescription}
      setName={setName}
      setPrice={setPrice}
      image={image}
      setImage={setImage}
    />
  );
};
