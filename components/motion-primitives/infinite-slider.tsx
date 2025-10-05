"use client";
import * as React from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number; // pixels per second
  className?: string;
  gap?: number; // spacing between items
  speedOnHover?: number; // optional speed on hover
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  speed = 50,
  className,
  gap = 32,
  speedOnHover,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const currentSpeed = React.useRef(speed);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationFrame: number;
    let start: number | null = null;
    let totalWidth = 0;

    function updateWidth() {
      const content = el.firstElementChild as HTMLElement;
      if (content) {
        totalWidth = content.scrollWidth / 2;
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (totalWidth > 0) {
        el.scrollLeft = ((elapsed / 1000) * currentSpeed.current) % totalWidth;
      }
      animationFrame = requestAnimationFrame(step);
    }

    animationFrame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateWidth);
    };
  }, [speed]);

  // Flatten children to array for duplication
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      ref={ref}
      className={`overflow-x-hidden w-full ${className || ""}`}
      style={{ position: "relative", whiteSpace: "nowrap" }}
      onMouseEnter={() => {
        if (speedOnHover) currentSpeed.current = speedOnHover;
      }}
      onMouseLeave={() => {
        currentSpeed.current = speed;
      }}
    >
      <div
        className={`flex flex-row items-center`}
        style={{ display: "inline-flex", minWidth: "200%" }}
      >
        {childrenArray.map((child, i) => (
          <div key={"logo-" + i} style={{ marginRight: gap }}>
            {child}
          </div>
        ))}
        {childrenArray.map((child, i) => (
          <div key={"logo-dup-" + i} style={{ marginRight: gap }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
