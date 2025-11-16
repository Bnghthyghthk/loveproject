import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/ProductGallery";
import { SizeSelector } from "@/components/SizeSelector";
import { ColorSelector } from "@/components/ColorSelector";
import { ProductFeatures } from "@/components/ProductFeatures";
import { OrderDialog } from "@/components/OrderDialog";
import { Logo } from "@/components/Logo";
import { ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import whiteImg1 from "@/assets/White/w (1).jpg";
import whiteImg2 from "@/assets/White/w (2).jpg";
import whiteImg3 from "@/assets/White/w (3).jpg";
import whiteImg4 from "@/assets/White/w (4).jpg";
import whiteImg5 from "@/assets/White/w (5).jpg";
import whiteImg6 from "@/assets/White/w (6).jpg";

import blackImg1 from "@/assets/Black/b (1).jpg";
import blackImg2 from "@/assets/Black/b (2).jpg";
import blackImg3 from "@/assets/Black/b (3).jpg";
import blackImg4 from "@/assets/Black/b (4).jpg";
import blackImg5 from "@/assets/Black/b (5).jpg";
import blackImg6 from "@/assets/Black/b (6).jpg";

import greyImg1 from "@/assets/grey/g (1).jpg";
import greyImg2 from "@/assets/grey/g (2).jpg";
import greyImg3 from "@/assets/grey/g (3).jpg";
import greyImg4 from "@/assets/grey/g (4).jpg";
import greyImg5 from "@/assets/grey/g (5).jpg";
import greyImg6 from "@/assets/grey/g (6).jpg";

import brownImg1 from "@/assets/brown/b (1).jpg";
import brownImg2 from "@/assets/brown/b (2).jpg";
import brownImg3 from "@/assets/brown/b (3).jpg";
import brownImg4 from "@/assets/brown/b (4).jpg";

import mintImg1 from "@/assets/Mint Green/M-G (1).jpg";
import mintImg2 from "@/assets/Mint Green/M-G (2).jpg";
import mintImg3 from "@/assets/Mint Green/M-G (3).jpg";
import mintImg4 from "@/assets/Mint Green/M-G (4).jpg";
import mintImg5 from "@/assets/Mint Green/M-G (5).jpg";

import navyImg1 from "@/assets/Navy/N (1).jpg";
import navyImg2 from "@/assets/Navy/N (2).jpg";
import navyImg3 from "@/assets/Navy/N (3).jpg";
import navyImg4 from "@/assets/Navy/N (4).jpg";
import navyImg5 from "@/assets/Navy/N (5).jpg";
import navyImg6 from "@/assets/Navy/N (6).jpg";

const productImagesByColor = {
  white: [
    { src: whiteImg1, alt: "سويت شيرت كاردونية أبيض" },
    { src: whiteImg2, alt: "سويت شيرت كاردونية أبيض - منظر 2" },
    { src: whiteImg3, alt: "سويت شيرت كاردونية أبيض - منظر 3" },
    { src: whiteImg4, alt: "سويت شيرت كاردونية أبيض - منظر 4" },
    { src: whiteImg5, alt: "سويت شيرت كاردونية أبيض - منظر 5" },
    { src: whiteImg6, alt: "سويت شيرت كاردونية أبيض - منظر 6" },
  ],
  black: [
    { src: blackImg1, alt: "سويت شيرت كاردونية أسود" },
    { src: blackImg2, alt: "سويت شيرت كاردونية أسود - منظر 2" },
    { src: blackImg3, alt: "سويت شيرت كاردونية أسود - منظر 3" },
    { src: blackImg4, alt: "سويت شيرت كاردونية أسود - منظر 4" },
    { src: blackImg5, alt: "سويت شيرت كاردونية أسود - منظر 5" },
    { src: blackImg6, alt: "سويت شيرت كاردونية أسود - منظر 6" },
  ],
  grey: [
    { src: greyImg1, alt: "سويت شيرت كاردونية حديدي" },
    { src: greyImg2, alt: "سويت شيرت كاردونية حديدي - منظر 2" },
    { src: greyImg3, alt: "سويت شيرت كاردونية حديدي - منظر 3" },
    { src: greyImg4, alt: "سويت شيرت كاردونية حديدي - منظر 4" },
    { src: greyImg5, alt: "سويت شيرت كاردونية حديدي - منظر 5" },
    { src: greyImg6, alt: "سويت شيرت كاردونية حديدي - منظر 6" },
  ],
  brown: [
    { src: brownImg1, alt: "سويت شيرت كاردونية بني" },
    { src: brownImg2, alt: "سويت شيرت كاردونية بني - منظر 2" },
    { src: brownImg3, alt: "سويت شيرت كاردونية بني - منظر 3" },
    { src: brownImg4, alt: "سويت شيرت كاردونية بني - منظر 4" },
  ],
  mint: [
    { src: mintImg1, alt: "سويت شيرت كاردونية منت جرين" },
    { src: mintImg2, alt: "سويت شيرت كاردونية منت جرين - منظر 2" },
    { src: mintImg3, alt: "سويت شيرت كاردونية منت جرين - منظر 3" },
    { src: mintImg4, alt: "سويت شيرت كاردونية منت جرين - منظر 4" },
    { src: mintImg5, alt: "سويت شيرت كاردونية منت جرين - منظر 5" },
  ],
  navy: [
    { src: navyImg1, alt: "سويت شيرت كاردونية نبيتي" },
    { src: navyImg2, alt: "سويت شيرت كاردونية نبيتي - منظر 2" },
    { src: navyImg3, alt: "سويت شيرت كاردونية نبيتي - منظر 3" },
    { src: navyImg4, alt: "سويت شيرت كاردونية نبيتي - منظر 4" },
    { src: navyImg5, alt: "سويت شيرت كاردونية نبيتي - منظر 5" },
    { src: navyImg6, alt: "سويت شيرت كاردونية نبيتي - منظر 6" },
  ],
};

const Index = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("L");
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const { toast } = useToast();

  // Hide banner after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
    // Scroll to product gallery on mobile
    if (window.innerWidth < 1024) {
      const main = document.querySelector("main");
      if (main) {
        main.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleOrderNow = () => {
    if (!selectedSize) {
      toast({
        title: "الرجاء اختيار المقاس",
        description: "يجب اختيار المقاس قبل إتمام الطلب",
        variant: "destructive",
      });
      return;
    }
    setOrderDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Premium Offer Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white py-5 px-4 shadow-2xl animate-pulse relative overflow-hidden transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-30 animate-shimmer"></div>
          <div className="container mx-auto text-center relative z-10">
            <p className="text-lg md:text-xl font-black tracking-wide drop-shadow-lg">
              ⚡ عرض حصري محدود الوقت: <span className="text-yellow-300 animate-bounce inline-block">خصم 20%</span> على جميع الطلبات + <span className="text-yellow-300 animate-bounce inline-block">شحن مجاني</span> للطلبات التي تصل إلى 3,000 جنيه فأكثر 🚚
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-center px-4">
          <Logo />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={productImagesByColor[currentColor as keyof typeof productImagesByColor]} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title & Badge */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                  متوفر
                </Badge>
                <span className="text-sm text-muted-foreground">SKU: 85152891</span>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
                سويت شيرت كاردونية مقلم
              </h1>

              {/* Pricing Section */}
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <div>
                  <span className="text-4xl font-bold text-red-600">₪ 1,199</span>
                  <span className="text-lg text-muted-foreground line-through mr-3">₪ 1,500</span>
                </div>
                <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                  خصم 20%
                </Badge>
              </div>
            </div>

            {/* Special Offers */}
            <div className="rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 p-4 border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-900 mb-3">🎁 عروض خاصة</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>شراء 3 قطع أو أكثر: خصم إضافي 10%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>شحن مجاني للطلبات فوق 3,000 جنيه</span>
                </li>
              </ul>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                سويتشيرت كاردونية مقلم بتصميم عصري وأنيق. خامة كاردونية شتوي مُبطن من الداخل
                معالج ضد الوبر والإنكماش. مثالي للاستخدام اليومي في فصل الشتاء.
              </p>
            </div>

            {/* Color Selector */}
            <ColorSelector onColorChange={handleColorChange} />

            {/* Size Selector */}
            <SizeSelector onSizeChange={setSelectedSize} selectedColor={currentColor} />

            {/* Order Now Button */}
            <div className="pt-4">
              <Button size="lg" className="w-full gap-2" variant="default" onClick={handleOrderNow}>
                <ShoppingBag className="h-5 w-5" />
                طلب الآن
              </Button>
            </div>

            {/* Product Specs */}
            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <h3 className="font-semibold">مواصفات المنتج</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>الخامة: كاردونية شتوي مُبطن من الداخل</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>معالج ضد الوبر والإنكماش</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>يتوفر بـ 6 ألوان مختلفة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>تصميم بجيب أمامي وقبعة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 border-t border-border">
          <ProductFeatures />
        </div>
      </main>

      {/* Order Dialog */}
      <OrderDialog 
        open={orderDialogOpen}
        onOpenChange={setOrderDialogOpen}
        productName="سويت شيرت كاردونية مقلم"
        selectedSize={selectedSize}
        selectedColor={currentColor}
      />
    </div>
  );
};

export default Index;
