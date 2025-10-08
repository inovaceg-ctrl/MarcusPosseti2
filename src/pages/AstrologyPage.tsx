"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AstrologyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-4 sm:p-8">
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-purple-500/30 shadow-2xl rounded-xl p-6 sm:p-10 space-y-8 text-center transform transition-all duration-500 ease-in-out hover:scale-[1.01]">
        <CardContent className="p-0">
          <img
            src="/marcus_posseti.jpg" // Confirmed image path
            alt="Marcus Posseti"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto mb-8 object-cover border-6 border-purple-400 shadow-lg"
          />
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-purple-200 leading-tight">
            Descubra os Segredos do Seu Signo
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 font-light">
            Conecte-se com os astros e receba insights personalizados sobre sua jornada
          </p>

          <div className="mb-10 p-4 bg-white/5 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-purple-300">Marcus Posseti</h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Astrólogo profissional dedicado a ajudá-lo a entender a influência dos astros em sua vida. Mapas astrais específicos e personalizados para sua jornada única.
            </p>
          </div>

          <p className="text-lg sm:text-xl mb-10 text-gray-200 leading-relaxed">
            Ao responder este questionário, você dará o primeiro passo para desvendar o que seu signo e os astros revelam sobre você. Descubra insights profundos sobre amor, carreira, saúde e muito mais.
          </p>

          <Link to="/questionnaire">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-xl sm:text-2xl px-10 py-7 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75">
              Começar Questionário
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Age Restriction Banner */}
      <div className="mt-10 p-5 bg-yellow-500/90 text-yellow-900 rounded-lg shadow-xl text-center text-lg sm:text-xl font-semibold max-w-md animate-bounce-slow">
        Aviso: Este questionário é destinado apenas a pessoas maiores de 18 anos.
      </div>
    </div>
  );
};

export default AstrologyPage;