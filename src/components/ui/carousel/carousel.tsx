
import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "@/hooks/use-carousel"
import { CarouselContext } from "./carousel-context"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useCarousel>[0]["opts"]
  plugins?: Parameters<typeof useCarousel>[0]["plugins"]
  orientation?: "horizontal" | "vertical"
  setApi?: Parameters<typeof useCarousel>[0]["setApi"]
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const carousel = useCarousel({
      opts,
      plugins,
      orientation,
      setApi,
    })

    return (
      <CarouselContext.Provider value={carousel}>
        <div
          ref={ref}
          onKeyDownCapture={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault()
              carousel.scrollPrev()
            } else if (e.key === "ArrowRight") {
              e.preventDefault()
              carousel.scrollNext()
            }
          }}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

export { Carousel }
