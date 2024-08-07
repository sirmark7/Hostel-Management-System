import { PropTypes } from "prop-types";
import {  useNavigate } from "react-router-dom";

const BaseButton = ({
  text,
  loading,
  type,
  bgColor,
  hoverColor,
  textColor,
  icon,
  path,
}) => {
  const router = useNavigate();
  const pathname = useNavigate().pathname;

  const trigger = () => {
    if (path) {
      router(path);
    }
  };

  const formPage = pathname === path;

  return formPage ? null : (
    <button
      onClick={trigger}
      disabled={loading}
      type={type}
      className={`transition-all p-2 flex items-center justify-center gap-2 rounded-xl ${bgColor} hover:${hoverColor} ${textColor}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
BaseButton.propTypes= {
  text:PropTypes.string,
  loading:PropTypes.boolean,
  type:PropTypes.string,
  bgColor:PropTypes.string,
  hoverColor:PropTypes.string,
  textColor:PropTypes.string,
  icon:PropTypes.node,
  path:PropTypes.string,
}
export default BaseButton;
