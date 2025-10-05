import * as React from "react";

interface ProgressiveBlurProps {
  children: React.ReactNode;
  blurAmount?: number; // px
  className?: string;
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  children,
  blurAmount = 8,
  className,
}) => {
  return (
    <div className={className} style={{ filter: `blur(${blurAmount}px)` }}>
      {children}
    </div>
  );
};
