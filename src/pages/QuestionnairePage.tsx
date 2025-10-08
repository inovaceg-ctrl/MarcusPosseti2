"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Define a type for the answers state
interface AnswersState {
  name?: string;
  whatsapp?: string;
  city?: string;
  birthDate?: string;
  birthTime?: string;
  stressReaction?: string;
  futureConcern?: string;
  lifeGoal?: string;
  changeHandling?: string;
  lovePriority?: string;
  careerView?: string;
  workPreference?: string;
  physicalHealth?: string;
  stressCoping?: string;
  destinyBelief?: string;
  selfReflection?: string;
  receiveUpdates?: boolean;
}

// Define a type for the result state
interface ResultState {
  solarSign: string;
  personalitySummary: string;
  relationshipsText: string;
  careerText: string;
  healthText: string;
  recommendations: string;
  name?: string;
  whatsapp?: string;
  receiveUpdates?: boolean;
}

// Define a type for a single question object
interface Question {
  id: keyof AnswersState; // Ensure 'id' is a key of AnswersState
  type: "text" | "date" | "time" | "radio" | "checkbox";
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const questions: Question[] = [ // Apply the Question type to the array
  {
    id: "name",
    type: "text",
    label: "Qual é o seu nome completo?",
    placeholder: "Seu nome completo",
  },
  {
    id: "whatsapp",
    type: "text",
    label: "Qual é o seu WhatsApp? (com DDD)",
    placeholder: "Ex: 4199786765",
  },
  {
    id: "city",
    type: "text",
    label: "Qual é a sua cidade?",
    placeholder: "Sua cidade",
  },
  {
    id: "birthDate",
    type: "date",
    label: "Qual é a sua data de nascimento?",
  },
  {
    id: "birthTime",
    type: "time",
    label: "A que horas você nasceu? (Se souber)",
  },
  {
    id: "stressReaction",
    type: "radio",
    label: "Como você reage em situações de estresse?",
    options: [
      { value: "isolate", label: "Prefiro me isolar e refletir sozinho(a)" },
      { value: "talk", label: "Procuro conversar com alguém e desabafar" },
      { value: "activity", label: "Me jogo em uma atividade física ou prática para liberar a tensão" },
    ],
  },
  {
    id: "futureConcern",
    type: "radio",
    label: "Quando você pensa no futuro, o que mais te preocupa?",
    options: [
      { value: "career", label: "Minha carreira e conquistas profissionais" },
      { value: "relationships", label: "Meus relacionamentos e conexões emocionais" },
      { value: "health", label: "Minha saúde e bem-estar físico e mental" },
    ],
  },
  {
    id: "lifeGoal",
    type: "radio",
    label: "Qual é o seu maior objetivo de vida neste momento?",
    options: [
      { value: "professionalSuccess", label: "Alcançar sucesso profissional e financeiro" },
      { value: "meaningfulRelationship", label: "Encontrar e manter um relacionamento significativo" },
      { value: "healthWellbeing", label: "Melhorar minha saúde e bem-estar" },
      { value: "selfKnowledge", label: "Aprofundar meu autoconhecimento e desenvolver espiritualmente" },
    ],
  },
  {
    id: "changeHandling",
    type: "radio",
    label: "Como você lida com mudanças inesperadas em sua vida?",
    options: [
      { value: "adaptQuickly", label: "Encaro de frente e me adapto rapidamente" },
      { value: "planControl", label: "Tento planejar e controlar, mas às vezes é difícil" },
      { value: "uncomfortable", label: "Sinto-me desconfortável, preciso de tempo para me ajustar" },
    ],
  },
  {
    id: "lovePriority",
    type: "radio",
    label: "Qual é a sua maior prioridade nos relacionamentos amorosos?",
    options: [
      { value: "emotionalIntensity", label: "Intensidade emocional: Quero viver grandes emoções" },
      { value: "trustStability", label: "Confiança e estabilidade: O mais importante é a segurança emocional" },
      { value: "intellectualConnection", label: "Preciso de alguém com quem eu possa conversar profundamente" },
    ],
  },
  {
    id: "careerView",
    type: "radio",
    label: "Como você enxerga sua carreira?",
    options: [
      { value: "leaderAchiever", label: "Quero ser líder e alcançar grandes conquistas" },
      { value: "stableTranquil", label: "Busco algo mais estável e tranquilo, com boa qualidade de vida" },
      { value: "helpPeople", label: "Quero ajudar as pessoas e fazer a diferença no mundo" },
    ],
  },
  {
    id: "workPreference",
    type: "radio",
    label: "Você prefere trabalhar de forma mais independente ou em equipe?",
    options: [
      { value: "independent", label: "Independente: Prefiro ser responsável pelo meu próprio sucesso" },
      { value: "team", label: "Em equipe: Acredito que o trabalho colaborativo é mais eficaz" },
      { value: "depends", label: "Depende da situação: Eu me adapto conforme o momento" },
    ],
  },
  {
    id: "physicalHealth",
    type: "radio",
    label: "Como você cuida da sua saúde física?",
    options: [
      { value: "disciplined", label: "Sou muito disciplinado(a) com exercícios e alimentação saudável" },
      { value: "tryCare", label: "Tento me cuidar, mas não sou tão exigente com a alimentação" },
      { value: "difficultyRoutine", label: "Tenho dificuldade em manter uma rotina saudável de cuidados físicos" },
    ],
  },
  {
    id: "stressCoping",
    type: "radio",
    label: "Você costuma lidar com situações estressantes da seguinte forma?",
    options: [
      { value: "relaxingActivities", label: "Pratico atividades relaxantes como meditação ou yoga" },
      { value: "physicalHobbies", label: "Faço atividades físicas ou hobbies para aliviar a tensão" },
      { value: "avoidAccumulate", label: "Tento evitar o estresse, mas muitas vezes ele se acumula" },
    ],
  },
  {
    id: "destinyBelief",
    type: "radio",
    label: "Você acredita em alguma forma de destino ou força superior guiando sua vida?",
    options: [
      { value: "yesPlan", label: "Sim, acredito que há um plano maior para mim" },
      { value: "controlMystery", label: "Eu tento controlar minha vida, mas sei que o destino tem seus mistérios" },
      { value: "noResponsible", label: "Não, acredito que somos totalmente responsáveis pelo nosso destino" },
    ],
  },
  {
    id: "selfReflection",
    type: "radio",
    label: "Como você lida com a necessidade de refletir sobre si mesmo(a)?",
    options: [
      { value: "reflectFrequently", label: "Gosto de refletir frequentemente sobre minha vida e minhas escolhas" },
      { value: "notOften", label: "Não costumo refletir muito, prefiro seguir em frente" },
      { value: "needTime", label: "Preciso de mais tempo para pensar sobre minhas ações e sentimentos" },
    ],
  },
  {
    id: "receiveUpdates",
    type: "checkbox",
    label: "Você deseja receber horóscopos diários e outras atualizações relacionadas ao seu mapa astral através do WhatsApp ou e-mail?",
    options: [
      { value: "yes", label: "Sim, aceito receber horóscopos diários e atualizações" },
    ],
  },
];

const QuestionnairePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [result, setResult] = useState<ResultState | null>(null);

  const handleInputChange = (id: keyof AnswersState, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (id: keyof AnswersState, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id: keyof AnswersState, checked: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: checked }));
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const generateResult = () => {
    // --- SIMULATED ASTROLOGICAL INTERPRETATION ---
    // This is a simplified simulation based on the provided example and user answers.
    // In a real application, this would involve an external astrology API.

    let solarSign = "Desconhecido"; // Default
    const birthDate = answers.birthDate;
    if (birthDate) {
      const date = new Date(birthDate);
      const month = date.getMonth() + 1; // getMonth() is 0-indexed
      const day = date.getDate();

      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) solarSign = "Áries";
      else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) solarSign = "Touro";
      else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) solarSign = "Gêmeos";
      else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) solarSign = "Câncer";
      else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) solarSign = "Leão";
      else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) solarSign = "Virgem";
      else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) solarSign = "Libra";
      else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) solarSign = "Escorpião";
      else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) solarSign = "Sagitário";
      else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) solarSign = "Capricórnio";
      else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) solarSign = "Aquário";
      else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) solarSign = "Peixes";
    }

    let personalitySummary = "Com base nas suas respostas, você é uma pessoa com características únicas.";
    if (solarSign === "Libra") {
      personalitySummary = "Com base nas suas respostas, você é uma pessoa equilibrada e diplomática, valorizando harmonia e justiça.";
    } else if (solarSign === "Áries") {
      personalitySummary = "Com base nas suas respostas, você é uma pessoa dinâmica e cheia de iniciativa, com um espírito pioneiro.";
    } // Add more sign-based summaries as needed

    let relationshipsText = "Você busca conexões significativas.";
    if (answers.lovePriority === "intellectualConnection") {
      relationshipsText = "Você busca conexão intelectual profunda com seu parceiro.";
    } else if (answers.lovePriority === "emotionalIntensity") {
      relationshipsText = "Você anseia por intensidade emocional e grandes paixões nos relacionamentos.";
    } else if (answers.lovePriority === "trustStability") {
      relationshipsText = "Para você, confiança e estabilidade são a base de qualquer relacionamento duradouro.";
    }

    let careerText = "Sua carreira é um caminho para o crescimento.";
    if (answers.careerView === "helpPeople") {
      careerText = "Você quer fazer a diferença e ajudar as pessoas através do seu trabalho.";
    } else if (answers.careerView === "leaderAchiever") {
      careerText = "Você tem ambição de ser líder e alcançar grandes conquistas profissionais.";
    } else if (answers.careerView === "stableTranquil") {
      careerText = "Você busca uma carreira estável e tranquila, valorizando a qualidade de vida.";
    }

    let healthText = "Sua saúde é importante para o seu bem-estar geral.";
    if (answers.physicalHealth === "difficultyRoutine") {
      healthText = "Este é um ponto de atenção: desenvolver rotinas saudáveis será benéfico.";
    } else if (answers.physicalHealth === "disciplined") {
      healthText = "Você demonstra disciplina e cuidado com sua saúde física, o que é excelente.";
    } else if (answers.physicalHealth === "tryCare") {
      healthText = "Você tenta se cuidar, mas pode se beneficiar de mais consistência em sua rotina de saúde.";
    }

    let recommendations = "Com base no seu perfil astrológico, os astros sugerem que você continue explorando seu autoconhecimento.";
    if (answers.lifeGoal === "selfKnowledge") {
      recommendations = "Com base no seu perfil astrológico, os astros sugerem que você continue aprofundando seu autoconhecimento, pois é um caminho que ressoa profundamente com você.";
    } else if (answers.stressReaction === "isolate") {
      recommendations = "Com base no seu perfil astrológico, os astros sugerem que, ao se isolar em momentos de estresse, você pode se beneficiar de encontrar um equilíbrio entre a reflexão solitária e a busca por apoio externo.";
    } else if (solarSign === "Libra" && answers.birthTime === "") {
      recommendations = "Com base no seu perfil astrológico, os astros sugerem que você trabalhe no equilíbrio entre suas ambições e suas necessidades emocionais. Considere descobrir sua hora de nascimento para um mapa astral ainda mais preciso.";
    }

    setResult({
      solarSign,
      personalitySummary,
      relationshipsText,
      careerText,
      healthText,
      recommendations,
      name: answers.name,
      whatsapp: answers.whatsapp,
      receiveUpdates: answers.receiveUpdates,
    });
    setCurrentStep(questions.length); // Go to the result page
  };

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;
  const isResultPage = currentStep === questions.length;

  const handleRetakeQuestionnaire = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-4">
      <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-sm border-none shadow-lg p-8 space-y-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold text-purple-200">
            {isResultPage ? "Seu Mapa Astral e Horóscopo Diário" : "Questionário Astrológico"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {!isResultPage ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-100">{currentQuestion.label}</h2>
              {currentQuestion.type === "text" && (
                <Input
                  type="text"
                  placeholder={currentQuestion.placeholder}
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                  className="bg-white/20 border-purple-400 text-white placeholder-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              )}
              {currentQuestion.type === "date" && (
                <Input
                  type="date"
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                  className="bg-white/20 border-purple-400 text-white focus:ring-purple-500 focus:border-purple-500"
                />
              )}
              {currentQuestion.type === "time" && (
                <Input
                  type="time"
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                  className="bg-white/20 border-purple-400 text-white focus:ring-purple-500 focus:border-purple-500"
                />
              )}
              {currentQuestion.type === "radio" && (
                <RadioGroup
                  onValueChange={(value) => handleRadioChange(currentQuestion.id, value)}
                  value={answers[currentQuestion.id] || ""}
                  className="flex flex-col space-y-2 items-start"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                      <Label htmlFor={`${currentQuestion.id}-${option.value}`} className="text-lg text-gray-200">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
              {currentQuestion.type === "checkbox" && (
                <div className="flex items-center space-x-2 justify-center">
                  <Checkbox
                    id={currentQuestion.id}
                    checked={answers[currentQuestion.id] || false}
                    onCheckedChange={(checked: boolean) => handleCheckboxChange(currentQuestion.id, checked)}
                    className="border-purple-400 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                  />
                  <Label htmlFor={currentQuestion.id} className="text-lg text-gray-200">
                    {currentQuestion.options[0].label}
                  </Label>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                  <Button
                    onClick={goToPreviousStep}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
                  >
                    Anterior
                  </Button>
                )}
                {isLastQuestion ? (
                  <Button
                    onClick={generateResult}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out ml-auto"
                  >
                    Gerar Meu Mapa Astral
                  </Button>
                ) : (
                  <Button
                    onClick={goToNextStep}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out ml-auto"
                  >
                    Próximo
                  </Button>
                )}
              </div>
            </div>
          ) : (
            // Result Page
            <div className="text-left space-y-6">
              <h2 className="text-3xl font-bold text-purple-300">Olá, {result?.name || "visitante"}!</h2>
              <p className="text-xl text-gray-200">Seu Signo Solar: <span className="font-bold text-purple-300">{result?.solarSign}</span></p>
              <p className="text-lg text-gray-300">{result?.personalitySummary}</p>

              <h3 className="text-2xl font-semibold text-purple-300 mt-6">Relacionamentos</h3>
              <p className="text-lg text-gray-300">{result?.relationshipsText}</p>

              <h3 className="text-2xl font-semibold text-purple-300 mt-6">Carreira</h3>
              <p className="text-lg text-gray-300">{result?.careerText}</p>

              <h3 className="text-2xl font-semibold text-purple-300 mt-6">Saúde</h3>
              <p className="text-lg text-gray-300">{result?.healthText}</p>

              <h3 className="text-2xl font-semibold text-purple-300 mt-6">Recomendações Personalizadas</h3>
              <p className="text-lg text-gray-300">{result?.recommendations}</p>

              <p className="text-lg text-gray-300 mt-6">
                Para um mapa astral completo e personalizado, com insights profundos sobre todos os aspectos da sua vida, agende uma consulta individual com Marcus Posseti.
              </p>

              <h3 className="text-2xl font-semibold text-purple-300 mt-6">Agende Sua Consulta Personalizada</h3>
              <p className="text-lg text-gray-300">marcuspossenti@hotmail.com</p>
              <a
                href={`https://wa.me/554199786765?text=Olá%20Marcus,%20gostaria%20de%20agendar%20uma%20consulta%20personalizada%20para%20o%20meu%20mapa%20astral.%20Meu%20nome%20é%20${encodeURIComponent(result?.name || "")}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out mt-4"
              >
                Clique aqui para ver seu mapa astral completo (WhatsApp)
              </a>

              {result?.receiveUpdates && result?.whatsapp && (
                <p className="text-md text-gray-400 mt-4">
                  Você optou por receber horóscopos diários e atualizações no WhatsApp. Seu número ({result.whatsapp}) será adicionado à lista de transmissão de Marcus Posseti.
                </p>
              )}

              <Button
                onClick={handleRetakeQuestionnaire}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out mt-8"
              >
                Fazer Questionário Novamente
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionnairePage;