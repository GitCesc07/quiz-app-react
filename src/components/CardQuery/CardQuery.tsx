import { cuestionario_niif_pymes } from "../consts/cuestionario-niif-pymes";
import Question from "./Question";

export default function CardQuery() {
    return (
        <>
            {
                cuestionario_niif_pymes.map((questions, index) => (
                    <div key={index} className="w-full bg-white p-4 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center justify-center mt-4">
                        <h3 className="text-xl font-bold text-center">{questions.title}</h3>
                        {
                            questions.id === 1 ? (
                                questions["sobre-pequeñas-y-medianas-entidades"]?.map((question, index) => (
                                    <div className="w-full" key={index}>
                                        <Question question={question} />
                                    </div>
                                ))
                            )
                                :
                                (
                                    questions.id === 2 ? (
                                        questions["sobre-conceptos-y-principios-generales"]?.map((question, index) => (
                                            <div className="w-full" key={index}>
                                                <Question question={question} />
                                            </div>
                                        ))
                                    )
                                        :
                                        (
                                            questions.id === 3 ? (
                                                questions["sobre-presentacion-de-estados-financieros"]?.map((question, index) => (
                                                    <div className="w-full" key={index}>
                                                        <Question question={question} />
                                                    </div>
                                                ))
                                            )
                                                :
                                                questions.id === 4 ? (
                                                    questions["sobre-el-estados-de-situacion-financiera"]?.map((question, index) => (
                                                        <div className="w-full" key={index}>
                                                            <Question question={question} />
                                                        </div>
                                                    ))
                                                )
                                                    :
                                                    (questions.id === 5 ? (
                                                        questions["sobre-el-estados-de-resultado-integral-y-estado-resultado"]?.map((question, index) => (
                                                            <div className="w-full" key={index}>
                                                                <Question question={question} />
                                                            </div>
                                                        ))
                                                    )
                                                        :
                                                        questions.id === 6 ? (
                                                            questions["sobre-estados-de-cambios-en-el-patrimonio-y-estado-de-resultados-y-ganancias-acumuladas"]?.map((question, index) => (
                                                                <div className="w-full" key={index}>
                                                                    <Question question={question} />
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
            }
        </>
    )
}
