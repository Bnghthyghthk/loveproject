import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  selectedSize: string;
  selectedColor: string;
}

const egyptGovernorates = [
  "الدقهلية", "القاهرة", "الجيزة", "الإسكندرية", "الشرقية", "المنوفية", "القليوبية",
  "البحيرة", "الغربية", "كفر الشيخ", "دمياط", "بورسعيد", "الإسماعيلية", "السويس",
  "أسيوط", "سوهاج", "قنا", "الأقصر", "أسوان", "بني سويف", "الفيوم", "المنيا",
  "شمال سيناء", "جنوب سيناء", "البحر الأحمر", "الوادي الجديد", "مطروح"
];

export const OrderDialog = ({ open, onOpenChange, productName, selectedSize, selectedColor }: OrderDialogProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    streetAddress: "",
    apartmentDetails: "",
    city: "",
    governorate: "الدقهلية",
    country: "Egypt",
    deliveryNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.streetAddress || !formData.city) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the order to your backend
    console.log("Order submitted:", {
      ...formData,
      productName,
      size: selectedSize,
      color: selectedColor
    });

    toast({
      title: "تم إرسال طلبك بنجاح!",
      description: "سيتم تحويلك إلى صفحة التأكيد",
    });

    onOpenChange(false);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      streetAddress: "",
      apartmentDetails: "",
      city: "",
      governorate: "الدقهلية",
      country: "Egypt",
      deliveryNotes: ""
    });

    // Scroll to top on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Navigate to confirmation page
    navigate(`/order-confirmation?size=${selectedSize}&color=${selectedColor}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">إتمام الطلب</DialogTitle>
          <DialogDescription>
            {productName} - {selectedColor} - مقاس {selectedSize}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Delivery Address Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">🏠 تفاصيل عنوان التسليم</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">الاسم *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">الهاتف *</Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="1234567890"
                  className="flex-1"
                  required
                />
                <div className="flex items-center px-3 border rounded-md bg-muted min-w-[70px] justify-center">
                  <span className="text-sm">+20</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="streetAddress">عنوان الشارع *</Label>
              <Input
                id="streetAddress"
                value={formData.streetAddress}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                placeholder="أدخل عنوان الشارع"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apartmentDetails">شقة، جناح، وحدة، مبنى، طابق، الخ</Label>
              <Input
                id="apartmentDetails"
                value={formData.apartmentDetails}
                onChange={(e) => setFormData({ ...formData, apartmentDetails: e.target.value })}
                placeholder="مثال: شقة 5، الطابق الثاني"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">المدينة *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="أدخل اسم المدينة"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="governorate">المحافظة *</Label>
                <Select
                  value={formData.governorate}
                  onValueChange={(value) => setFormData({ ...formData, governorate: value })}
                >
                  <SelectTrigger id="governorate">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {egyptGovernorates.map((gov) => (
                      <SelectItem key={gov} value={gov}>
                        {gov}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">الدولة *</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger id="country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Egypt">Egypt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Instructions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">📝 تعليمات التسليم</h3>
            
            <div className="space-y-2">
              <Label htmlFor="deliveryNotes">تعليمات إضافية لمندوب التوصيل</Label>
              <Textarea
                id="deliveryNotes"
                value={formData.deliveryNotes}
                onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                placeholder="مثال: رقم موبايل إضافي، أو ملاحظات خاصة بالتوصيل..."
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            تأكيد الطلب
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
