import React from 'react';
import type { ReactNode } from 'react';
import { QuizContext, useQuizContext } from '../hooks/useQuizContext';

interface QuizProviderProps {
    children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
    const contextValue = useQuizContext();

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};
