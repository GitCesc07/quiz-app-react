import { createContext, useContext, useState } from 'react';
import type { Option } from '../type/typeData';

interface QuizAnswer {
    questionId: number;
    selectedOptions: Option[];
    isCorrect: boolean;
}

interface QuizContextType {
    answers: QuizAnswer[];
    addAnswer: (questionId: number, selectedOptions: Option[], correctOptions: Option[]) => void;
    clearAnswers: () => void;
    showResults: boolean;
    setShowResults: (show: boolean) => void;
    getTotalQuestions: () => number;
    getCorrectAnswers: () => number;
    getIncorrectAnswers: () => number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz debe ser usado dentro de un QuizProvider');
    }
    return context;
};

export const useQuizContext = () => {
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [showResults, setShowResults] = useState(false);

    const addAnswer = (questionId: number, selectedOptions: Option[], correctOptions: Option[]) => {
        // Verificar si la respuesta es correcta comparando las opciones seleccionadas con las correctas
        const selectedIds = selectedOptions.map(opt => opt.id_response).sort();
        const correctIds = correctOptions.map(opt => opt.id_response).sort();
        const isCorrect = JSON.stringify(selectedIds) === JSON.stringify(correctIds);

        setAnswers(prev => {
            // Remover respuesta anterior si existe
            const filtered = prev.filter(answer => answer.questionId !== questionId);
            // Agregar nueva respuesta
            return [...filtered, { questionId, selectedOptions, isCorrect }];
        });
    };

    const clearAnswers = () => {
        setAnswers([]);
        setShowResults(false);
    };

    const getTotalQuestions = () => {
        return answers.length;
    };

    const getCorrectAnswers = () => {
        return answers.filter(answer => answer.isCorrect).length;
    };

    const getIncorrectAnswers = () => {
        return answers.filter(answer => !answer.isCorrect).length;
    };

    return {
        answers,
        addAnswer,
        clearAnswers,
        showResults,
        setShowResults,
        getTotalQuestions,
        getCorrectAnswers,
        getIncorrectAnswers,
    };
};

export { QuizContext, type QuizContextType, type QuizAnswer };
