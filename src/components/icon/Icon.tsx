
import iconsSprait from "../../assets/code-icons/code-icons.svg";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "117px"}
      height={props.height || "117px"}
      viewBox={props.viewBox || "0 0 117 117"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprait}#${props.iconId}`} />
    </svg>
  );
};
