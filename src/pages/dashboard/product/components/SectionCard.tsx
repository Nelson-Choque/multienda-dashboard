import { useColor } from "../../../../context/hooks/useColor";

export interface ISectionCard {
  id: number;
  imgUrl: string;
  name: string;
  brand: string;
  price: number;
}

export function SectionCard({ imgUrl, name, brand, price }: ISectionCard) {
  const { backgroundColor, textColor } = useColor();

  return (
    <article className="overflow-hidden bg-white text-start rounded-2xl">
      {/* <Link to={`/home/store/product`}> */}
      <img className="w-full p-1" src={imgUrl} alt="" />
      <div className="p-2 body">
        <h3 className="uppercase opacity-30">{brand}</h3>
        <p className="text-base">{name}</p>
        <div className="flex justify-between mt-2">
          <p className="text-xl font-bold text-pink-400">S/{price}</p>
          <div
            style={{ backgroundColor, color: textColor }}
            className="flex items-center justify-center w-8 h-8 text-white bg-pink-400 rounded-full"
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </article>
  );
}
