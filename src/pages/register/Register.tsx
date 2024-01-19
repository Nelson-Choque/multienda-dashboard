import { ChangeEvent, FormEventHandler, useState } from "react";
import "./../../App.css";
import { RegisterView } from "./RegisterView";
import { AuthService } from "../../services/AuthService";

interface IFormData {
  password: string;
  username: string;
  storeName: string;
}

export const Register = () => {
  //* usestates

  const [dataForm, setDataForm] = useState<IFormData>({
    password: "",
    username: "",
    storeName: "",
  });

  //* functions

  //* handleFieldChange

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ): void {
    //* handleFieldChange - set dataForm

    setDataForm((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  }

  //* handleRegister
  async function handleRegister(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<FormEventHandler<HTMLFormElement> | undefined> {
    event.preventDefault();

    const authService: AuthService = new AuthService();
    const isCreated = await authService.register(
      dataForm.username,
      dataForm.password,
      dataForm.storeName
    );

    if (!isCreated) {
      alert("hubo un error al crear");
      return;
    }
    alert("se creo exitosamente, puedes regresar al inicio e iniciar sesion");
  }

  return (
    <RegisterView
      handleFieldChange={handleFieldChange}
      handleRegister={handleRegister}
    />
  );
};
