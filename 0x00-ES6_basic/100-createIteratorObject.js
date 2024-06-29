export default function createIteratorObject(report) {
    return {
        [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
            if (i < report.length) {
                return { value: report[i++], done: false };
            }
            return { value: undefined, done: true };
            }
        };
        }
    };
}