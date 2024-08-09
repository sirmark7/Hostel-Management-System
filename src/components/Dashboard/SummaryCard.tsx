import Link from "next/link";

interface SummaryCardProps {
  title: string;
  icon: React.ReactNode;
  value: string | number;
  path: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  icon,
  value,
  path,
}) => {
  return (
    <Link
      href={path}
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

export default SummaryCard;
