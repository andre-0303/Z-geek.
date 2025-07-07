import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

const JogosPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api-jogos-uxuc.onrender.com/api/games"
        );
        if (!response.ok) {
          throw new Error("Falha ao buscar os jogos!");
        }
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="h-full bg-gamer-gray p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default JogosPage;
