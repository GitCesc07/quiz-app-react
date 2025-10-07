import { useEffect, useState } from "react";
import type { Option, queryData } from "../../type/typeData";

export default function Question({ question }: { question: queryData }) {

    const [getDataQuestion, setGetDataQuestion] = useState<Option[]>([]);


    // Add this hook to your component
    useEffect(() => {
        console.log(getDataQuestion);
    }, [getDataQuestion]);

    const handleSelectOption = (selectedOption: Option) => {
        if (getDataQuestion.length == 0) {
            setGetDataQuestion([...getDataQuestion, selectedOption]);
        }
        else {
            if (selectedOption.id_response && selectedOption.isChecked == true) {
                setGetDataQuestion((prev) => {
                    if (prev.some((item) => item.id_response === selectedOption.id_response)) {
                        return prev; // Ya está incluida
                    }
                    return [...prev, selectedOption];
                });
            }
            else {
                setGetDataQuestion((prev) => prev.filter((item) => item.id_response !== selectedOption.id_response));
            }
        }
    };

    const handleResponseValida = () => {
        getDataQuestion.map(item => {
            question.options.map(question => {
                const response = item.id_response === question.id_response;
            })
        })
    }

    return (
        <>
            <h4 className="font-bold w-full">{question.question}</h4>
            {
                question.options.map((option, index) => (
                    <div key={index} className="flex items-center justify-center w-full gap-x-2 mt-4">
                        <input
                            type="checkbox"
                            name=""
                            id={`select_option` + option.textResponse}
                            onChange={(e) => {
                                handleSelectOption({ ...option, isChecked: e.target.checked });
                            }}
                        />
                        <label className="w-full" htmlFor={`select_option` + option.textResponse}>{option.textResponse}</label>
                    </div>
                ))
            }

            <button
                onClick={handleResponseValida}
                type="button"
                className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-150 text-white font-bold uppercase py-2 px-4 mt-4 rounded-md cursor-pointer"
            >
                Enviar respuesta
            </button>
        </>
    )
}
