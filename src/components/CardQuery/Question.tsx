import { useState } from "react";
import type { Option, queryData } from "../../type/typeData";

export default function Question({ question }: { question: queryData }) {

    const [getDataQuestion, setGetDataQuestion] = useState<Option[]>([]);

    console.log(getDataQuestion);

    const handleSelectOption = (selectedOption: Option) => {        
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
    };

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
        </>
    )
}
