"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Assuming we'll navigate to the questionnaire form

const AstrologyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-4">
      <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-sm border-none shadow-lg p-8 space-y-8 text-center">
        <CardContent className="p-0">
          <img
            src="/marcus_posseti.jpg" // Using the uploaded photo
            alt="Marcus Posseti"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-purple-400"
          />
          <h1 className="text-5xl font-extrabold mb-4 text-purple-200">
            Descubra os Segredos do Seu Signo
          </h1>
          <p className="text-xl mb-6 text-gray-200">
            Conecte-se com os astros e receba insights personalizados sobre sua jornada
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-purple-300">Marcus Posseti</h2>
            <p className="text-lg text-gray-300">
              Astrólogo profissional dedicado a ajudá-lo a entender a influência dos astros em sua vida. Mapas astrais específicos e personalizados para sua jornada única.
            </p>
          </div>

          <p className="text-lg mb-8 text-gray-200">
            Ao responder este questionário, você dará o primeiro passo para desvendar o que seu signo e os astros revelam sobre você. Descubra insights profundos sobre amor, carreira, saúde e muito mais.
          </p>

          <Link to="/questionnaire">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-xl px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Começar Questionário
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Age Restriction Banner */}
      <div className="mt-8 p-4 bg-yellow-500/90 text-yellow-900 rounded-lg shadow-md text-center text-lg font-semibold max-w-md">
        Aviso: Este questionário é destinado apenas a pessoas maiores de 18 anos.
      </div>
    </div>
  );
};

export default AstrologyPage;