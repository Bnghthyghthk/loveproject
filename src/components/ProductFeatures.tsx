import { Shield, Droplet, Wind, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "خامة ممتازة",
    description: "كاردونية شتوي مُبطن من الداخل",
  },
  {
    icon: Droplet,
    title: "معالج ضد الوبر",
    description: "يحافظ على شكله الأصلي",
  },
  {
    icon: Wind,
    title: "مقاوم للانكماش",
    description: "لا يتأثر بالغسيل المتكرر",
  },
  {
    icon: Star,
    title: "تصميم عصري",
    description: "مثالي للاستخدام اليومي",
  },
];

export const ProductFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="rounded-full bg-accent/10 p-3">
            <feature.icon className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">{feature.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
