const averageNum = (...args) => args.reduce((a, b) => a + b) / args.length;
const isNumber = (value) => !Number.isNaN(parseFloat(value)) && Number.isFinite(value);

export { averageNum, isNumber };
