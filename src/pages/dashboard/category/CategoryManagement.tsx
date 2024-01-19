import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../components/ButtonPrimary";

export const CategoryManagement = () => {
  return (
    <>
      <div className="min-h-screen grid place-content-center gap-4 justify-items-center">
        <p className="text-4xl font-bold ">Proximamente</p>
        <Link to={"/dashboard/"}>
          <ButtonPrimary text="regresar" />
        </Link>
      </div>
    </>
  );
};
