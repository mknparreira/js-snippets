export const isNumber = (value) => !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
export const averageNum = (...args) => args.reduce((a, b) => a + b) / args.length;
