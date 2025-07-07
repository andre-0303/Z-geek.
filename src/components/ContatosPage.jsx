import { Phone, Mail } from "lucide-react";

const ContatosPage = () => (
  <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gamer-textSecondary text-gamer-textSecondary px-4">
    <h1 className="text-4xl font-extrabold text-gamer-primary mb-8 text-center drop-shadow">
      Nossos Contatos
    </h1>

    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="flex items-center gap-4 bg-gamer-gray rounded-lg p-4 shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Phone size={28} className="text-gamer-primary" />
        <h3 className="text-lg font-semibold tracking-wide">(88) 9999-999</h3>
      </div>

      <div className="flex items-center gap-4 bg-gamer-gray rounded-lg p-4 shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Mail size={28} className="text-gamer-primary" />
        <h3 className="text-lg font-semibold tracking-wide">zgeek@gmail.com</h3>
      </div>
    </div>
  </div>
);

export default ContatosPage;
