type Props = {
  buttonContent: string;
  changeImageSlider: () => void;
};

export default function ButtonNextSlider({ buttonContent,changeImageSlider }: Props) {
  return (
    <button
      onClick={changeImageSlider}
      className="w-12 h-12 rounded-full bg-offWhite text-black text-xl font-bold duration-150 ease-out hover:bg-slate-300 active:scale-105">
      {buttonContent}
    </button>
  );
}