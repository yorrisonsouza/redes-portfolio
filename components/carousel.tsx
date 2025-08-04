"use client"

import React, { useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode
  itemWidthClass?: string
  gapClass?: string
}

export function Carousel({ children, itemWidthClass = "w-full sm:w-1/2 lg:w-1/3", gapClass = "gap-6" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  React.useEffect(() => {
    checkScrollability()
    const currentRef = scrollRef.current
    currentRef?.addEventListener("scroll", checkScrollability)
    window.addEventListener("resize", checkScrollability)
    return () => {
      currentRef?.removeEventListener("scroll", checkScrollability)
      window.removeEventListener("resize", checkScrollability)
    }
  }, [checkScrollability])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const childrenArray = React.Children.toArray(children)

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={cn("flex overflow-x-auto scrollbar-thin scroll-smooth snap-x snap-mandatory", gapClass)}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className={cn("flex-none snap-center", itemWidthClass)}>
            {child}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="bg-background/80 hover:bg-background border border-border rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="bg-background/80 hover:bg-background border border-border rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
