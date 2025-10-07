interface Option {
    id_response: number;
    textResponse: string;
    isCorrect: boolean;
    isChecked?: boolean;
}

interface queryData {
    question: string;
    id_question: number;
    options: Option[];
}

interface dataQuery {
    queryData: queryData[];
    option: Option[];
}

export type { queryData, Option, dataQuery };