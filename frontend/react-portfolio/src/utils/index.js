const compose = (...funcs) => (component) => {
  return funcs.reduceRight((prevResult, func) => func(prevResult), component);
};

const getUrlBase = () => {
  return process.env.NODE_ENV === 'development' ? '' : '/release/portfolio';
};

export { compose, getUrlBase };
