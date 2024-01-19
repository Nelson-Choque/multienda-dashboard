import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useColor } from "../../../context/hooks/useColor";
import { StoreManagementView } from "./StoreManagementView";
import { getUserLocalStorage } from "../functions/functions";
import { IUser } from "../../login/Login";
import axios from "axios";
import { constans } from "../../../const/const";

interface IformData {
  nameStore: string;
  description: string;
  telefono: number | string;
  logo: File | undefined;
  urlLogo: string;
}
//* StoreManagement
export const StoreManagement = () => {
  // * states

  const [formData, setFormData] = useState<IformData>({
    nameStore: "",
    description: "",
    logo: undefined,
    telefono: "",
    urlLogo: "",
  });
  //* get context of color
  const { setColor, setTextColor, backgroundColor } = useColor();

  // * functions

  //* handleBackground
  function handleBackground(event: ChangeEvent<HTMLInputElement>): void {
    const color = event.target.value;
    setColor(color);
  }

  //* handleBackground

  function handleTextColor(event: ChangeEvent<HTMLInputElement>): void {
    const color = event.target.value;
    setTextColor(color);
  }

  //* handleInputChange

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ): void {
    if (event.target.files !== null) {
      console.log("a");
      const file = event.target.files[0];

      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        // Actualizar el estado con la URL de datos de la imagen y el archivo seleccionado
        setFormData((prevData) => ({
          ...prevData,
          [field]: file,
          urlLogo: reader.result as string,
        }));
      };

      // Leer el contenido del archivo como una URL de datos
      reader.readAsDataURL(file);

      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
    console.log(formData);
  }

  //* handleSubmit

  async function handleSubmit(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    //* set formDataStore
    const formDataSend: FormData = new FormData();

    formDataSend.append("name", formData.nameStore);
    formDataSend.append("color", backgroundColor);
    formDataSend.append("telefono", formData.telefono + "");
    if (formData.logo) {
      formDataSend.append("logo", formData.logo);
    }
    alert("change is proces");
    const { store }: IUser = getUserLocalStorage();

    //*fetch api - Put store
    const res = await fetch(`${constans.API_BACKEND}/store/${store.id}`, {
      method: "PUT",

      body: formDataSend,
    });

    if (!res) {
      alert("error en la actualizacion de la tienda");
      return;
    }

    alert("se actualizo correctamente");
  }

  //* useEffects

  useEffect(() => {
    async function getData() {
      const { store }: IUser = getUserLocalStorage();

      const { data } = await axios.get(
        `${constans.API_BACKEND}/store/${store.id}`
      );

      console.log(data);
      setColor(data.color);
      setFormData((prevData) => ({
        ...prevData,
        ["nameStore"]: data.name,
        ["telefono"]: data.telefono,
        ["urlLogo"]: data.logo,
      }));
    }

    getData();
  }, [setColor]);

  return (
    <StoreManagementView
      handleBackground={handleBackground}
      handleTextColor={handleTextColor}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      backgroundColor={backgroundColor}
      formData={formData}
    />
  );
};
