import React, { useState } from "react";

const GameCard = ({ game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gamer-dark text-center flex justify-center items-center flex-col border-gamer-primary rounded-lg overflow-hidden shadow hover:shadow-lg transition w-full max-w-sm mx-auto">
        <img
          src={game.image_url}
          alt={game.title}
          className="w-full h-78 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold text-white">{game.title}</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gamer-primary hover:bg-gamer-lightPurple text-white py-1 px-3 rounded text-sm self-start"
          >
            Ver Descrição
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">{game.title}</h2>
            <p className="text-gray-700 mb-4">{game.description}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GameCard;
