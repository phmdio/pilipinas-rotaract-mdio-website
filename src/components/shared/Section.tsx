
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  hasOverlay?: boolean;
  overlayOpacity?: "light" | "medium" | "dark";
  id?: string;
}

const Section = ({ 
  children, 
  className,
  backgroundImage,
  hasOverlay = false,
  overlayOpacity = "medium",
  id
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-16 w-full",
        className
      )}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {hasOverlay && (
        <div className={cn(
          "absolute inset-0 z-0",
          overlayOpacity === "light" && "bg-black/20",
          overlayOpacity === "medium" && "bg-black/50",
          overlayOpacity === "dark" && "bg-black/70"
        )} />
      )}
      {children}
    </section>
  );
};

export default Section;
