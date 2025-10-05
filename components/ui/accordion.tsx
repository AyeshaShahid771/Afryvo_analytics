"use client";

import * as React from "react";

interface AccordionProps {
  type?: "single" | "multiple";
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  value,
  onValueChange,
  className,
  children,
}: AccordionProps) {
  const isControlled = value !== undefined && onValueChange !== undefined;
  const [open, setOpen] = React.useState<string | null>(value || null);

  React.useEffect(() => {
    if (isControlled) setOpen(value!);
  }, [value, isControlled]);

  React.useEffect(() => {
    console.log("Accordion open state (render):", open);
  }, [open]);

  const handleChange = (val: string) => {
    if (type === "single") {
      const newVal = val === open ? null : val;
      if (isControlled) {
        onValueChange?.(newVal || "");
      } else {
        setOpen(newVal);
      }
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child: any) => {
        if (!React.isValidElement(child)) return null;
        const el = child as React.ReactElement<any>;
        return React.cloneElement(el, {
          isOpen: open === el.props.value,
          onToggle: () => handleChange(el.props.value),
        });
      })}
    </div>
  );
}

interface AccordionItemProps {
  value: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div className="border-b">
      {React.Children.map(children, (child: any) => {
        if (!React.isValidElement(child)) return null;
        if (child.type === AccordionTrigger) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            onToggle,
          });
        }
        if (child.type === AccordionContent) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
          });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

export function AccordionTrigger({
  isOpen,
  onToggle,
  children,
}: AccordionTriggerProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => {
        console.log("AccordionTrigger clicked, isOpen:", isOpen);
        if (onToggle) onToggle();
      }}
      className="w-full text-left py-2 font-medium"
    >
      {children}
    </button>
  );
}

interface AccordionContentProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

export function AccordionContent({ isOpen, children }: AccordionContentProps) {
  return isOpen ? <div className="py-2 text-sm">{children}</div> : null;
}
