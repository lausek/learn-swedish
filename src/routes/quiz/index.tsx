export class Statistics {
    public correct: number;
    public total: number;

    constructor(correct: number = 0, total: number = 0) {
        this.correct = correct;
        this.total = total;
    }

    public updateFromResult(result: boolean): Statistics {
        let { correct, total } = this;

        total += 1;
        if(result) {
            correct += 1;
        }

        return new Statistics(correct, total);
    }
}
