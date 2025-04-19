
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  color?: "light" | "dark";
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  className,
  color = "dark" 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12 text-center",
      color === "light" && "text-white",
      color === "dark" && "text-gray-900",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <h3 className={cn(
          "text-lg md:text-xl max-w-3xl mx-auto",
          color === "light" && "text-white/90",
          color === "dark" && "text-gray-600"
        )}>
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
