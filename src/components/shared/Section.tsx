
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  hasOverlay?: boolean;
  overlayOpacity?: "light" | "medium" | "dark";
  id?: string; // Added id prop
}

const Section = ({ 
  children, 
  className,
  backgroundImage,
  hasOverlay = false,
  overlayOpacity = "medium",
  id // Added id destructuring
}: SectionProps) => {
  return (
    <section 
      id={id} // Added id attribute
      className={cn(
        "relative py-16",
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
          "absolute inset-0",
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
