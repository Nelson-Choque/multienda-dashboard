import { Link } from "react-router-dom";

// * interface
interface Props {
  icon: string;
  text: string;
  link: string;
}

export const CardOption = ({ icon, text, link }: Props) => {
  return (
    <Link
      to={`/dashboard/${link}`}
      className="flex items-center justify-between gap-4 text-black  rounded-2xl"
    >
      <div className="flex flex-col">
        <div className="relative self-center p-4 rounded-xl bg-primary top-8">
          <img className="w-12 " src={icon} />
        </div>
        <div className="flex flex-col items-center gap-2 p-12 text-center bg-white shadow-md rounded-2xl">
          <h3 className="text-lg font-bold">{text}</h3>
          <p className="text-base">{text}</p>
        </div>
      </div>
    </Link>
  );
};
