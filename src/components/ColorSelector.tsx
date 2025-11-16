import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const colors = [
  { name: "نبيتي", value: "navy", hex: "#722f37" },
  { name: "رمادي", value: "grey", hex: "#8B8B8B" },
  { name: "منت جرين", value: "mint", hex: "#003600" },
  { name: "بني فاتح", value: "brown", hex: "#B8844A" },
  { name: "أسود", value: "black", hex: "#1A1A1A" },
  { name: "أبيض", value: "white", hex: "#F5F5F5" },
];

interface ColorSelectorProps {
  onColorChange?: (color: string) => void;
}

export const ColorSelector = ({ onColorChange }: ColorSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorSelect = (value: string) => {
    setSelectedColor(value);
    onColorChange?.(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">اللون</h3>
        <span className="text-sm text-muted-foreground">
          {colors.find((c) => c.value === selectedColor)?.name}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            className={cn(
              "relative h-12 w-12 rounded-full border-2 transition-all hover:scale-110",
              selectedColor === color.value
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : "border-border"
            )}
            style={{ backgroundColor: color.hex }}
            aria-label={color.name}
          >
            {selectedColor === color.value && (
              <Check
                className={cn(
                  "absolute inset-0 m-auto h-5 w-5",
                  color.value === "white" ? "text-primary" : "text-white"
                )}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
