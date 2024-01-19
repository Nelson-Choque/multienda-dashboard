import { ButtonPrimary } from "../../../components/ButtonPrimary";

// * intefaces

interface IProps {
  price: number;
  title: string;
  maxProducts: string;
}

export const CardPlain = ({ price, title, maxProducts }: IProps) => {
  return (
    <article className="flex flex-col gap-12 p-8 transition-transform shadow-xl cursor-pointer w-80 rounded-2xl hover:scale-110">
      <div className="flex justify-center text-primary-700">
        <h2 className="text-6xl font-bold">s/{price}</h2>
        <p className="self-end font-medium">/mes</p>
      </div>
      <div className="">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <section className="flex flex-col gap-2 mt-4">
          <div className="flex gap-1">
            <i className="relative fa-solid fa-check top-2"></i>
            <p>personalizacion de la tienda</p>
          </div>
          <div className="flex gap-1">
            <i className="relative fa-solid fa-check top-2"></i>
            <p>carrito de compras</p>
          </div>
          <div className="flex gap-1">
            <i className="relative fa-solid fa-check top-2"></i>
            <p>cantidad maxima de productos: {maxProducts}</p>
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <ButtonPrimary text="contactar" />
      </div>
    </article>
  );
};
