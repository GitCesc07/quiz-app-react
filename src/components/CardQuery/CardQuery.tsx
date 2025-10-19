import { cuestionario_niif_pymes } from "../consts/cuestionario-niif-pymes";
import { cuestionario_derecho_tributario } from "../consts/cuestionario-derecho-tributario";
import { cuestionario_pla } from "../consts/cuestionario-pla";
import Question from "./Question";
import QuizResults from "../QuizResults/QuizResults";
import { useEffect, useState } from "react";
import { cuestionario_sobre_etica_profesional } from "../consts/cuestionaro-sobre-etica-profesional";
import { cuestionario_normas_internacionales } from "../consts/cuestionario-normas-internacionales";

type CardQueryProps = {
    linkActive: string
}

export default function CardQuery({ linkActive }: CardQueryProps) {

    const [isChangeQuery, setIsChangeQuery] = useState(false);

    useEffect(() => {
        setIsChangeQuery(true);
    }, [linkActive]);


    return (
        <>
            {
                linkActive == "NIIF Pymes" ?
                    cuestionario_niif_pymes.map((questions, index) => (
                        <div key={index} className="w-full bg-white rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                            <h3 className="text-xl font-bold text-center mb-6">{questions.title}</h3>
                            {
                                questions.id === 1 ? (
                                    questions["sobre-pequeñas-y-medianas-entidades"]?.map((question, questionIndex) => (
                                        <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                            <Question question={question} isChangeQuery={isChangeQuery} />
                                        </div>
                                    ))
                                )
                                    :
                                    (
                                        questions.id === 2 ? (
                                            questions["sobre-conceptos-y-principios-generales"]?.map((question, questionIndex) => (
                                                <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                    <Question question={question} isChangeQuery={isChangeQuery} />
                                                </div>
                                            ))
                                        )
                                            :
                                            (
                                                questions.id === 3 ? (
                                                    questions["sobre-presentacion-de-estados-financieros"]?.map((question, questionIndex) => (
                                                        <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                            <Question question={question} isChangeQuery={isChangeQuery} />
                                                        </div>
                                                    ))
                                                )
                                                    :
                                                    questions.id === 4 ? (
                                                        questions["sobre-el-estados-de-situacion-financiera"]?.map((question, questionIndex) => (
                                                            <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                <Question question={question} isChangeQuery={isChangeQuery} />
                                                            </div>
                                                        ))
                                                    )
                                                        :
                                                        (questions.id === 5 ? (
                                                            questions["sobre-el-estados-de-resultado-integral-y-estado-resultado"]?.map((question, questionIndex) => (
                                                                <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                    <Question question={question} isChangeQuery={isChangeQuery} />
                                                                </div>
                                                            ))
                                                        )
                                                            :
                                                            questions.id === 6 ? (
                                                                questions["sobre-estados-de-cambios-en-el-patrimonio-y-estado-de-resultados-y-ganancias-acumuladas"]?.map((question, questionIndex) => (
                                                                    <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                        <Question question={question} isChangeQuery={isChangeQuery} />
                                                                    </div>
                                                                ))
                                                            )
                                                                :
                                                                questions.id === 7 ? (
                                                                    questions["sobre-el-estado-de-flujo-de-efectivo"]?.map((question, questionIndex) => (
                                                                        <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                            <Question question={question} isChangeQuery={isChangeQuery} />
                                                                        </div>
                                                                    ))
                                                                )
                                                                    :
                                                                    questions.id === 8 ? (
                                                                        questions["sobre-notas-a-los-estados-financieros"]?.map((question, questionIndex) => (
                                                                            <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                                <Question question={question} isChangeQuery={isChangeQuery} />
                                                                            </div>
                                                                        ))
                                                                    )
                                                                        :
                                                                        (null)
                                                        )
                                            )
                                    )

                            }

                        </div>
                    ))
                    :
                    linkActive == "Derecho Tributario" ?
                        cuestionario_derecho_tributario.map((questions, index) => (
                            <div key={index} className="w-full bg-white p-4 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                                <h3 className="text-xl font-bold text-center mb-6">{questions.title}</h3>
                                {
                                    questions.id === 1 ? (
                                        questions["derecho-tributario-constitucional"]?.map((question, questionIndex) => (
                                            <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                <Question question={question} isChangeQuery={isChangeQuery} />
                                            </div>
                                        ))
                                    )
                                        :
                                        (
                                            questions.id === 2 ? (
                                                questions["derecho-tributario-ordinario"]?.map((question, questionIndex) => (
                                                    <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                        <Question question={question} isChangeQuery={isChangeQuery} />
                                                    </div>
                                                ))
                                            )
                                                :
                                                (
                                                    questions.id === 3 ? (
                                                        questions["derecho-tributario-municipal"]?.map((question, questionIndex) => (
                                                            <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                                <Question question={question} isChangeQuery={isChangeQuery} />
                                                            </div>
                                                        ))
                                                    )
                                                        :
                                                        (null)
                                                )
                                        )
                                }

                            </div>
                        ))
                        :
                        linkActive == "Etica Profesional" ?
                            cuestionario_sobre_etica_profesional.map((questions, index) => (
                                <div key={index} className="w-full bg-white rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                                    <h3 className="text-xl font-bold text-center mb-6">{questions.title}</h3>
                                    {
                                        questions.id === 1 ? (
                                            questions["cuestionario-de-seleccion-multiple-sobre-etica-profesional"]?.map((question, questionIndex) => (
                                                <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                    <Question question={question} isChangeQuery={isChangeQuery} />
                                                </div>
                                            ))
                                        )
                                            :
                                            (null)
                                    }

                                </div>
                            ))
                            :
                            linkActive == "PLA" ?
                                cuestionario_pla.map((questions, index) => (
                                    <div key={index} className="w-full bg-white rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                                        <h3 className="text-xl font-bold text-center mb-6">{questions.title}</h3>
                                        {
                                            questions.id === 1 ? (
                                                questions["cuestionario_pla"]?.map((question, questionIndex) => (
                                                    <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                        <Question question={question} isChangeQuery={isChangeQuery} />
                                                    </div>
                                                ))
                                            )
                                                :
                                                (null)
                                        }

                                    </div>
                                ))
                                :
                                linkActive == "Normas Internacionales" ?
                                    cuestionario_normas_internacionales.map((questions, index) => (
                                        <div key={index} className="w-full bg-white rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                                            <h3 className="text-xl font-bold text-center mb-6">{questions.title}</h3>
                                            {
                                                questions.id === 1 ? (
                                                    questions["cuestionario-de-normas-internacionales-de-auditoria-y-responsabilidades-del-auditor"]?.map((question, questionIndex) => (
                                                        <div className="w-full border-b border-gray-200 pb-4" key={questionIndex}>
                                                            <Question question={question} isChangeQuery={isChangeQuery} />
                                                        </div>
                                                    ))
                                                )
                                                    :
                                                    (null)
                                            }

                                        </div>
                                    ))
                                    :
                                    (null)
            }

            {/* Componente de resultados */}
            <QuizResults linkActive={linkActive} />
        </>
    )
}
