import SummaryCard from "./SummaryCard";

const SummaryCards = ({ cards }: { cards: any[] }) => {
  return (
    <div className="flex justify-between gap-3 w-full flex-wrap">
      {cards.map((card) => (
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

export default SummaryCards;
