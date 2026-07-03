import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916204406272?text=Hi%20Jasim%2C%20I%20saw%20your%20portfolio!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;