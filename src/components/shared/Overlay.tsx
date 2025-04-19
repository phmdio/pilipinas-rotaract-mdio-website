
import { cn } from "@/lib/utils";

interface OverlayProps {
  className?: string;
  opacity?: "light" | "medium" | "dark";
  color?: string;
}

const Overlay = ({ 
  className,
  opacity = "medium",
  color = "black"
}: OverlayProps) => {
  const opacityClass = {
    light: "bg-opacity-20",
    medium: "bg-opacity-50",
    dark: "bg-opacity-70"
  }[opacity];

  return (
    <div 
      className={cn(
        "absolute inset-0",
        `bg-${color}`,
        opacityClass,
        className
      )}
    />
  );
};

export default Overlay;
