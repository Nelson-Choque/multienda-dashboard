interface IProps {
  text: string;
  background?: string;
  callback?: any;
}

export const ButtonPrimary = ({ text, background, callback }: IProps) => {
  return (
    <button
      style={{ background: background }}
      className="px-4 py-3 font-medium text-white transition-all rounded-2xl bg-primary hover:bg-primary-500 during 300"
      onClick={callback}
    >
      {text}
    </button>
  );
};

export const ButtonPrimaryFull = ({ text, background, callback }: IProps) => {
  return (
    <button
      style={{ background: background }}
      className="w-full px-4 py-3 font-medium text-white transition-all rounded-2xl bg-primary hover:bg-primary-500 during 300 "
      onClick={callback}
    >
      {text}
    </button>
  );
};

export const ButtonOutline = ({ text, callback }: IProps) => {
  return (
    <button
      className="px-4 py-3 font-medium transition-all duration-200 bg-transparent border rounded-2xl text-primary border-primary hover:bg-primary hover:text-white "
      onClick={callback}
    >
      {text}
    </button>
  );
};
