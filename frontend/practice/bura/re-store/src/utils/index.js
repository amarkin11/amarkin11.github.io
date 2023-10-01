const compose = (...funcs) => (component) => {
  return funcs.reduceRight((prevResult, func) => func(prevResult), component);
};

export { compose };
