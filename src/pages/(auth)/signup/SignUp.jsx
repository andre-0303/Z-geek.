import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { Mail, Lock } from "lucide-react";

const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function validationDisabled() {
    return email === "" || password === "";
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(`Erro ao cadastrar: ${error.message}`);
      return;
    }

    alert("Cadastro realizado com sucesso! Faça login agora.");
    navigate("/login");
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gamer-gray px-4">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Formulário acima do overlay */}
      <form
        onSubmit={handleSignUp}
        className="relative z-10 bg-gamer-dark p-6 sm:p-8 rounded-md shadow-lg w-full max-w-sm sm:max-w-md space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gamer-primary mb-4 sm:mb-6">
          Criar conta
        </h2>

        {/* Campo Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-gamer-textSecondary text-sm sm:text-base"
          >
            Email:
          </label>
          <div className="flex items-center border border-gray-600 rounded-md p-2 sm:p-3 bg-gray-800 focus-within:ring-2 focus-within:ring-gamer-primary">
            <Mail className="w-5 h-5 text-gamer-primary mr-2" />
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
        </div>

        {/* Campo Senha */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-gamer-textSecondary text-sm sm:text-base"
          >
            Senha:
          </label>
          <div className="flex items-center border border-gray-600 rounded-md p-2 sm:p-3 bg-gray-800 focus-within:ring-2 focus-within:ring-gamer-primary">
            <Lock className="w-5 h-5 text-gamer-primary mr-2" />
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
        </div>

        {/* Botão Criar Conta */}
        <button
          type="submit"
          disabled={validationDisabled() || loading}
          className={`w-full p-3 sm:p-4 rounded-md text-white font-bold transition ${
            validationDisabled() || loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gamer-primary hover:scale-105"
          }`}
        >
          {loading ? "Cadastrando..." : "Criar conta"}
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;
