import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "201027372515";
  const message = "مرحبا! أود استفسار عن منتجاتكم";

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 left-6 z-40 rounded-full bg-green-500 hover:bg-green-600 text-white p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="تواصل عبر WhatsApp"
      title="تواصل معنا عبر WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
