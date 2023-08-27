import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = "bg-red",
}) => {
  return (
    <div className="flex gap-2.5 items-center">
      <span className={cn(color, "w-4 h-20")}></span>
      <div className="flex flex-col gap-2.5 items-start">
        <span className=" uppercase text-lg font-semibold tracking-[0.375em]">
          {subtitle}
        </span>
        <span className="text-5xl">{title}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
