import { useQuiz } from "../../hooks/useQuiz";
import { cuestionario_niif_pymes } from "../consts/cuestionario-niif-pymes";
import { cuestionario_derecho_tributario } from "../consts/cuestionario-derecho-tributario";
import { cuestionario_sobre_etica_profesional } from "../consts/cuestionaro-sobre-etica-profesional";
import { cuestionario_pla } from "../consts/cuestionario-pla";
import { cuestionario_normas_internacionales } from "../consts/cuestionario-normas-internacionales";


type QuizResultProps = {
    linkActive: string
}

export default function QuizResults({ linkActive }: QuizResultProps) {
    const {
        answers,
        showResults,
        setShowResults,
        getCorrectAnswers,
        getIncorrectAnswers,
        clearAnswers
    } = useQuiz();

    // Obtener todas las preguntas del cuestionario
    const getAllQuestions = () => {
        const allQuestions: unknown[] = [];
        if (linkActive == "NIIF Pymes") {
            cuestionario_niif_pymes.forEach(section => {
                Object.keys(section).forEach(key => {
                    if (key !== 'id' && key !== 'title' && Array.isArray((section as Record<string, unknown>)[key])) {
                        allQuestions.push(...((section as Record<string, unknown>)[key] as unknown[]));
                    }
                });
            });
        }
        if (linkActive == "Derecho Tributario") {
            cuestionario_derecho_tributario.forEach(section => {
                Object.keys(section).forEach(key => {
                    if (key !== 'id' && key !== 'title' && Array.isArray((section as Record<string, unknown>)[key])) {
                        allQuestions.push(...((section as Record<string, unknown>)[key] as unknown[]));
                    }
                });
            });
        }
        if (linkActive == "Etica Profesional") {
            cuestionario_sobre_etica_profesional.forEach(section => {
                Object.keys(section).forEach(key => {
                    if (key !== 'id' && key !== 'title' && Array.isArray((section as Record<string, unknown>)[key])) {
                        allQuestions.push(...((section as Record<string, unknown>)[key] as unknown[]));
                    }
                });
            });
        }
        if (linkActive == "PLA") {
            cuestionario_pla.forEach(section => {
                Object.keys(section).forEach(key => {
                    if (key !== 'id' && key !== 'title' && Array.isArray((section as Record<string, unknown>)[key])) {
                        allQuestions.push(...((section as Record<string, unknown>)[key] as unknown[]));
                    }
                });
            });
        }
        if (linkActive == "Normas Internacionales") {
            cuestionario_normas_internacionales.forEach(section => {
                Object.keys(section).forEach(key => {
                    if (key !== 'id' && key !== 'title' && Array.isArray((section as Record<string, unknown>)[key])) {
                        allQuestions.push(...((section as Record<string, unknown>)[key] as unknown[]));
                    }
                });
            });
        }

        return allQuestions;
    };

    const allQuestions = getAllQuestions();
    const totalQuestions = allQuestions!.length;
    const answeredQuestions = answers.length;
    const allQuestionsAnswered = answeredQuestions === totalQuestions;

    const handleSubmitQuiz = () => {
        if (allQuestionsAnswered) {
            setShowResults(true);
        } else {
            alert(`Faltan ${totalQuestions - answeredQuestions} preguntas por responder. Por favor completa todas las preguntas antes de enviar el quiz.`);
        }
    };

    const handleRestartQuiz = () => {
        if (confirm("¿Estás seguro de que quieres reiniciar el quiz? Se perderán todas las respuestas.")) {
            clearAnswers();
            window.location.reload(); // Recarga la página para resetear todos los componentes
        }
    };

    const getScorePercentage = () => {
        if (answeredQuestions === 0) return 0;
        return Math.round((getCorrectAnswers() / answeredQuestions) * 100);
    };

    const getScoreColor = () => {
        const percentage = getScorePercentage();
        if (percentage >= 80) return "text-green-600";
        if (percentage >= 60) return "text-yellow-600";
        return "text-red-600";
    };

    const getScoreMessage = () => {
        const percentage = getScorePercentage();
        if (percentage >= 90) return "¡Excelente! 🎉";
        if (percentage >= 80) return "¡Muy bien! 👍";
        if (percentage >= 70) return "Bien, pero puedes mejorar 📚";
        if (percentage >= 60) return "Necesitas estudiar más 📖";
        return "Es necesario repasar más ⚠️";
    };

    if (!showResults) {
        return (
            <div className="w-full mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Progreso del Quiz</h3>
                    <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Preguntas respondidas: {answeredQuestions}/{totalQuestions}</span>
                            <span>Correctas: {getCorrectAnswers()}</span>
                            <span>Incorrectas: {getIncorrectAnswers()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {allQuestionsAnswered ? (
                        <div className="space-y-3">
                            <p className="text-green-600 font-medium">¡Has completado todas las preguntas! 🎉</p>
                            <button
                                onClick={handleSubmitQuiz}
                                className="bg-green-600 hover:bg-green-700 transition-all duration-150 text-white font-bold uppercase py-3 px-6 rounded-md cursor-pointer text-lg"
                            >
                                Enviar Quiz y Ver Resultados
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <p className="text-blue-600 font-medium">
                                Completa todas las preguntas para ver tus resultados
                            </p>
                            <button
                                onClick={handleSubmitQuiz}
                                disabled={!allQuestionsAnswered}
                                className="bg-gray-400 text-gray-600 font-bold uppercase py-3 px-6 rounded-md cursor-not-allowed text-lg"
                            >
                                Enviar Quiz y Ver Resultados
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full mt-8 space-y-6">
            {/* Resumen General */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Resultados del Quiz</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">{getCorrectAnswers()}</div>
                        <div className="text-gray-600">Correctas</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-red-600">{getIncorrectAnswers()}</div>
                        <div className="text-gray-600">Incorrectas</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                        <div className={`text-3xl font-bold ${getScoreColor()}`}>
                            {getScorePercentage()}%
                        </div>
                        <div className="text-gray-600">Puntuación</div>
                    </div>
                </div>
                <div className="text-center">
                    <p className={`text-lg font-medium ${getScoreColor()}`}>
                        {getScoreMessage()}
                    </p>
                </div>
            </div>

            {/* Detalle de Respuestas */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold">Detalle de tus respuestas:</h4>
                {answers.map((answer, index) => {
                    const question = allQuestions!.find(q => (q as { id_question: number }).id_question === answer.questionId) as { id_question: number; question: string; options: { id_response: number; textResponse: string; isCorrect: boolean; }[]; };
                    if (!question) return null;

                    return (
                        <div key={index} className={`p-4 rounded-lg border-2 ${answer.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                            }`}>
                            <div className="flex items-start justify-between mb-2">
                                <h5 className="font-bold text-lg">{question.question}</h5>
                                <span className={`px-3 py-1 rounded-full text-sm font-bold ${answer.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                    {answer.isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <p className="font-medium text-gray-700">Tu respuesta:</p>
                                    <ul className="list-disc list-inside ml-4">
                                        {answer.selectedOptions.map((option, optIndex) => (
                                            <li key={optIndex} className="text-gray-600">
                                                {option.textResponse}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium text-gray-700">Respuesta correcta:</p>
                                    <ul className="list-disc list-inside ml-4">
                                        {question.options.filter(opt => opt.isCorrect).map((option, optIndex) => (
                                            <li key={optIndex} className="text-green-700 font-medium">
                                                {option.textResponse}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Botón para reiniciar */}
            <div className="text-center">
                <button
                    onClick={handleRestartQuiz}
                    className="bg-gray-600 hover:bg-gray-700 transition-all duration-150 text-white font-bold uppercase py-3 px-6 rounded-md cursor-pointer text-lg"
                >
                    Reiniciar Quiz
                </button>
            </div>
        </div>
    );
}
