
import * as React from "react"
import type { CarouselApi } from "@/hooks/use-carousel"
import type { UseEmblaCarouselType } from "embla-carousel-react"

// Update the type to match what's returned from useCarousel
interface CarouselContextProps {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation?: "horizontal" | "vertical"
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarouselContext() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

export { CarouselContext, type CarouselContextProps }
