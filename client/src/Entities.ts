export class Paths{
    static CONSOLE = 'console';
    static RANKING = 'ranking';
    static RANKING_TOP5 = 'ranking/:rank';
    static MOST_CLICKER = 'ranking/action';
    static NOUKAI = 'noukai/:userId/:dept';
    static NOUKAI_LOGIN = 'noukai_login';
}

export interface IQuestion {
    question_id: number;
    question_text: string;
    question_image: string;
    question_num1: number;
    question_num2: number;
    question_num3: number;
    question_num4: number;
    answer_num: number;
}