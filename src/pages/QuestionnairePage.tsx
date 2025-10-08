"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuestionnairePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-4">
      <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-purple-200">Página do Questionário</h1>
        <p className="text-lg mb-6 text-gray-200">
          Esta é a página onde o questionário interativo será construído.
          Em breve, você poderá inserir seus dados para descobrir seu mapa astral!
        </p>
        <Link to="/astrology">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-md shadow-md transition-all duration-300 ease-in-out">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuestionnairePage;