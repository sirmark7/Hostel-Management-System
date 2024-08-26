import SummaryCard from "./SummaryCard";
import { PropTypes } from "prop-types";
const SummaryCards = ({ cards }) => {
  return (
    <div className="flex justify-between gap-3 w-full flex-wrap ">
      {cards?.map((card) => (
        <SummaryCard
          key={card.title}
          title={card.title}
          icon={card.icon}
          value={card.value}
          path={card.path}
        />
      ))}
    </div>
  );
};
SummaryCards.propTypes={
  cards:PropTypes.array
}
export default SummaryCards;
