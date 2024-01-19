import { useState, MouseEvent, ChangeEvent } from "react";
import "./../../App.css";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { LoginView } from "./LoginView";

// * interfaces
export interface IFormData {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  password: string;
  state: boolean;
  store: IStore;
  username: string;
}

export interface IStore {
  id: number;
  name: string;
}

export const Login = () => {
  // * useStates

  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");

  // * usenavigate

  const navigate = useNavigate();

  // * functions

  // * handlelogin

  async function handleLogin(event: MouseEvent): Promise<void> {
    event.preventDefault();

    // * handlelogin - fields validation
    if (!formData.username) {
      setInputError("el campo nombre no debe estar vacio");
      return;
    }

    if (!formData.password) {
      setInputError("el campo contraseña no debe estar vacio");
      return;
    }

    // * handlelogin - call auth services

    const authService: AuthService = new AuthService();
    const isAuthenticated = await authService.login(
      formData.username,
      formData.password
    );

    // * handlelogin - auth validation

    if (!isAuthenticated) {
      setInputError("usuario invalido");
      return;
    }

    // * handlelogin - redirect


    saveLocalStorage(isAuthenticated);

    setIsLogged(true);
    navigate("/dashboard");
  }

  // * handleFieldChange

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    // * handleFieldChange - set field
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  }

  return (
    <LoginView
      inputError={inputError}
      handleLogin={handleLogin}
      handleFieldChange={handleFieldChange}
      isLogged={isLogged}
    />
  );
};

function saveLocalStorage(user: IUser) {
  localStorage.setItem("user", JSON.stringify(user));
}
