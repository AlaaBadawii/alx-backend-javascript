export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < report.length) {
            const ret = { value: report[i += 1], done: false };
            return ret;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
