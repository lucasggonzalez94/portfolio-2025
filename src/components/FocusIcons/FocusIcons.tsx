import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Icon = React.memo(
  ({
    icon,
    index,
    hovered,
    setHovered,
  }: {
    icon: React.ReactNode;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden h-8 w-full transition-all duration-300 ease-out flex items-center justify-center",
        hovered !== null && hovered !== index && "blur-xs scale-[1]"
      )}
    >
      {icon}
    </div>
  )
);

Icon.displayName = "Icon";

export function FocusIcons({ icons }: { icons: React.ReactNode[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-6 gap-1 w-full">
      {icons.map((icon, index) => (
        <Icon
          icon={icon}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
