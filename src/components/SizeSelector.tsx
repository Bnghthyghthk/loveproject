import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sizes = [
  { size: "L", weight: "55-70 kg" },
  { size: "XL", weight: "70-85 kg" },
  { size: "2XL", weight: "85-100 kg" },
  { size: "3XL", weight: "100-112 kg" },
];

// الأحجام غير المتوفرة لكل لون
const unavailableSizesByColor: { [key: string]: string[] } = {
  black: ["XL"],
  grey: ["XL"],
};

interface SizeSelectorProps {
  onSizeChange?: (size: string) => void;
  selectedColor?: string;
}

export const SizeSelector = ({ onSizeChange, selectedColor = "white" }: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const unavailableSizes = unavailableSizesByColor[selectedColor] || [];

  useEffect(() => {
    onSizeChange?.(selectedSize);
  }, [selectedSize, onSizeChange]);

  const handleSizeChange = (size: string) => {
    if (!unavailableSizes.includes(size)) {
      setSelectedSize(size);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">المقاس</h3>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          دليل المقاسات
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {sizes.map((item) => {
          const isUnavailable = unavailableSizes.includes(item.size);
          return (
            <button
              key={item.size}
              onClick={() => handleSizeChange(item.size)}
              disabled={isUnavailable}
              className={cn(
                "group relative rounded-lg border-2 p-4 text-center transition-all",
                isUnavailable
                  ? "border-red-300 bg-red-50 cursor-not-allowed opacity-50"
                  : "hover:border-primary",
                selectedSize === item.size && !isUnavailable
                  ? "border-primary bg-primary/5"
                  : !isUnavailable && "border-border bg-card"
              )}
            >
              <div className="text-lg font-semibold">{item.size}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {isUnavailable ? "غير متوفر" : item.weight}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
