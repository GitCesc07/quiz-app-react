import React from 'react';
import { QuizContext } from './useQuizContext';

export const useQuiz = () => {
    const context = React.useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz debe ser usado dentro de un QuizProvider');
    }
    return context;
};
