import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Package, Truck, Home } from "lucide-react";
import { Logo as LogoComponent } from "@/components/Logo";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [orderDetails] = useState({
    id: `INF-${Date.now()}`,
    size: searchParams.get("size") || "L",
    color: searchParams.get("color") || "white",
    deliveryDays: 5,
  });

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-center px-4">
          <LogoComponent />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-green-100 p-6">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 text-foreground">شكراً لطلبك!</h1>
            <p className="text-lg text-muted-foreground">
              تم استقبال طلبك بنجاح. سنقوم بمعالجته وتسليمه إليك قريباً.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>تفاصيل الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-r-2 border-border pr-4">
                  <p className="text-sm text-muted-foreground mb-1">رقم الطلب</p>
                  <p className="text-lg font-semibold text-foreground">{orderDetails.id}</p>
                </div>
                <div className="pr-4">
                  <p className="text-sm text-muted-foreground mb-1">تاريخ الطلب</p>
                  <p className="text-lg font-semibold text-foreground">
                    {new Date().toLocaleDateString("ar-EG")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="border-r-2 border-border pr-4">
                  <p className="text-sm text-muted-foreground mb-1">المقاس</p>
                  <p className="text-lg font-semibold text-foreground">{orderDetails.size}</p>
                </div>
                <div className="pr-4">
                  <p className="text-sm text-muted-foreground mb-1">اللون</p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-border"
                      style={{
                        backgroundColor:
                          orderDetails.color === "navy"
                            ? "#722f37"
                            : orderDetails.color === "mint"
                            ? "#003600"
                            : orderDetails.color === "white"
                            ? "#F5F5F5"
                            : orderDetails.color === "black"
                            ? "#1A1A1A"
                            : orderDetails.color === "grey"
                            ? "#8B8B8B"
                            : "#B8844A",
                      }}
                    />
                    <span className="text-lg font-semibold text-foreground">
                      {orderDetails.color === "navy"
                        ? "نبيتي"
                        : orderDetails.color === "mint"
                        ? "منت جرين"
                        : orderDetails.color === "white"
                        ? "أبيض"
                        : orderDetails.color === "black"
                        ? "أسود"
                        : orderDetails.color === "grey"
                        ? "رمادي"
                        : "بني فاتح"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">مراحل التسليم</h2>

            <div className="space-y-4">
              {/* Stage 1: Processing */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-100 p-3 mb-2">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="h-12 w-1 bg-blue-200" />
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-lg text-foreground mb-1">جاري المعالجة</h3>
                  <p className="text-sm text-muted-foreground">سيتم معالجة طلبك الآن</p>
                </div>
              </div>

              {/* Stage 2: Shipping */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-orange-100 p-3 mb-2">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="h-12 w-1 bg-orange-200" />
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-lg text-foreground mb-1">قيد الشحن</h3>
                  <p className="text-sm text-muted-foreground">
                    سيتم شحن الطلب خلال يوم أو يومين
                  </p>
                </div>
              </div>

              {/* Stage 3: Delivery */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-green-100 p-3 mb-2">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">التسليم</h3>
                  <p className="text-sm text-muted-foreground">
                    سيصل طلبك خلال <span className="font-bold text-green-600">5 أيام عمل</span> من
                    تاريخ الطلب
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              size="lg"
              variant="default"
              className="w-full"
              onClick={() => navigate("/")}
            >
              العودة للمتجر
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              هل لديك أي استفسارات؟
            </p>
            <p className="text-lg font-semibold text-foreground">
              تواصل معنا عبر البريد الإلكتروني أو الهاتف
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;
