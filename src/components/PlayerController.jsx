import shuffle from "../assets/shuffle.svg";
import skip from "../assets/skip.svg";
import pause from "../assets/pause.svg";
import repeat from "../assets/repeat.svg";

export default function PlayerController(props) {
  return (
    <div className="flex justify-between items-center">
      {props.showControlButtons && (
        <>
          <img
            className="w-6 h-6"
            src={shuffle}
            alt="Ícone de aleatorizar a playlist"
          />
          <div className="w-10 h-10 rounded-full bg-slate-900 p-2 flex items-center justify-center">
            <img
              className="w-full h-full"
              src={skip}
              alt="Ícone de avançar uma música"
            />
          </div>
        </>
      )}
      <div
        className={`${
          props.showControlButtons ? "w-20 h-20 p-6" : "w-12 h-12 p-3"
        } rounded-full bg-white flex items-center justify-center`}
      >
        <img className="w-full h-full" src={pause} alt="Ícone de pausar" />
      </div>
      {props.showControlButtons && (
        <>
          <div className="w-10 h-10 rounded-full bg-slate-900 p-2 flex items-center justify-center rotate-180">
            <img
              className="w-full h-full"
              src={skip}
              alt="Ícone de voltar uma música"
            />
          </div>
          <img
            className="w-6 h-6"
            src={repeat}
            alt="Ícone de repetir a playlist"
          />
        </>
      )}
    </div>
  );
}
