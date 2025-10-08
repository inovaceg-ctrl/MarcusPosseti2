import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao seu aplicativo de astrologia!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Clique abaixo para descobrir os segredos do seu signo com Marcus Posseti.
        </p>
        <Link to="/astrology">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-md shadow-md transition-all duration-300 ease-in-out">
            Ir para a Página de Astrologia
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;