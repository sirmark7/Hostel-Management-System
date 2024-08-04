import { PropTypes } from "prop-types";

const Dots = ({ itemsLength, selectedIndex }) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center items-end -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={`h-2 w-2 rounded-full transition-all duration-300 bg-background-color ${!selected && "opacity-50 h-1 w-1"}`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

Dots.propTypes = {
  itemsLength:PropTypes.number,
  selectedIndex: PropTypes.number
};
export default Dots;
