import { useState, useEffect } from "react";
import type { Option, queryData } from "../../type/typeData";
import { useQuiz } from "../../hooks/useQuiz";

export default function Question({ question, isChangeQuery }: { question: queryData, isChangeQuery: boolean }) {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const { addAnswer, showResults } = useQuiz();
    useEffect(() => {
        if (isChangeQuery == true) {
            setSelectedOptions([]);
        }
    }, [isChangeQuery]);


    const handleSelectOption = (selectedOption: Option) => {
        let newSelectedOptions: Option[];

        if (selectedOption.isChecked) {
            newSelectedOptions = [...selectedOptions];
            if (!newSelectedOptions.some((item) => item.id_response === selectedOption.id_response)) {
                newSelectedOptions.push(selectedOption);
            }
        } else {
            newSelectedOptions = selectedOptions.filter((item) => item.id_response !== selectedOption.id_response);
        }

        setSelectedOptions(newSelectedOptions);

        // Guardar automáticamente la respuesta
        const correctOptions = question.options.filter(option => option.isCorrect);
        addAnswer(question.id_question, newSelectedOptions, correctOptions);
    };

    // Obtener las respuestas ya guardadas para mostrar el estado actual
    const { answers } = useQuiz();
    const currentAnswer = answers.find(answer => answer.questionId === question.id_question);

    // Cargar las respuestas guardadas cuando el componente se monta
    useEffect(() => {
        if (currentAnswer) {
            setSelectedOptions(currentAnswer.selectedOptions);
        }
    }, [currentAnswer]);

    const isOptionSelected = (optionId: number) => {                
        return selectedOptions.some(opt => opt.id_response === optionId);
    };

    const getOptionStyle = (option: Option) => {
        if (!showResults) return "";

        if (option.isCorrect) {
            return "bg-green-100 border-green-500 text-green-800";
        } else if (isOptionSelected(option.id_response)) {
            return "bg-red-100 border-red-500 text-red-800";
        }
        return "";
    };

    return (
        <>
            <div className="w-full mb-4">
                <h4 className="font-bold w-full mb-4">{question.question}</h4>
                {
                    question.options.map((option, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-start w-full gap-x-2 mt-2 p-2 rounded border-2 transition-all duration-200 ${getOptionStyle(option)}`}
                        >
                            <input
                                type="checkbox"
                                name={`question_${question.id_question}`}
                                id={`select_option_${question.id_question}_${option.id_response}`}
                                disabled={showResults}
                                checked={isOptionSelected(option.id_response)}
                                onChange={(e) => {
                                    handleSelectOption({ ...option, isChecked: e.target.checked });
                                }}
                                className="cursor-pointer"
                            />
                            <label
                                className="w-full cursor-pointer"
                                htmlFor={`select_option_${question.id_question}_${option.id_response}`}
                            >
                                {option.textResponse}
                            </label>
                            {showResults && option.isCorrect && (
                                <span className="text-green-600 font-bold ml-2">✓ Correcta</span>
                            )}
                        </div>
                    ))
                }

                {/* {selectedOptions.length > 0 && !showResults && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 font-medium">
                            ✓ Respuesta guardada automáticamente
                        </p>
                    </div>
                )} */}
            </div>
        </>
    )
}
