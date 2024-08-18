import {Link} from "react-router-dom";
import { PropTypes } from "prop-types";
const SummaryCard = ({
  title,
  icon,
  value,
  path,
}) => {
  return (
    <Link
      to={path}
      className="flex flex-col flex-grow gap-4 shadow-lg min-h-[150px] p-4 transition-all hover:bg-slate-300 bg-slate-100 rounded-lg"
    >
      <header className="flex items-center justify-between text-2xl font-semibold">
        <h3 className="capitalize">{title.toLowerCase()}</h3>
        {icon}
      </header>
      <h2 className="flex items-center justify-center text-center text-5xl">
        {value}
      </h2>
    </Link>
  );
};
SummaryCard.propTypes={
   title:PropTypes.string,
  icon:PropTypes.string,
  value:PropTypes.string,
  path:PropTypes.string,
}
export default SummaryCard;
