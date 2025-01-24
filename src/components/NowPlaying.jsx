import ProgressBar from "./ProgressBar";
import PlayerController from "./PlayerController";
import icarus from "../assets/icarus-bk.jpeg";

export default function NowPlaying(props) {
  return (
    <div
      className={`${
        !props.showProgressBar &&
        `fixed bottom-0 left-0 w-full flex flex-row items-center justify-between p-4 rounded-custom-glass bg-glass-light shadow-custom-glass backdrop-blur-md`
      }`}
    >
      <div
        className={`${
          !props.showProgressBar && "flex flex-row items-center space-x-4 md:max-xl:flex"
        }`}
      >
        <img
          className={`${
            props.showProgressBar ? "rounded-3xl w-full mb-4 text-lg" : "rounded-2xl w-16 text-sm"
          }`}
          src={icarus}
          alt="Music icon"
        />
        <div>
          <h2
            className={`font-bold ${props.showProgressBar ? "text-xl" : "text-base"}`}
          >
            Música de amor nunca mais
          </h2>
          <h3 className={`${props.showProgressBar ? "text-lg" : "text-sm"}`}>
            BK, Luccas Carlos, Nansy Silvvz, Gigantes
          </h3>
        </div>
      </div>
      {props.showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={props.showProgressBar} />
    </div>
  );
}
