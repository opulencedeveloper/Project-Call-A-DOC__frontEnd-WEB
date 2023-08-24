const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let i = 0; i <= 10; i++) {
    const year = currentYear - i;
    yearOptions.push(year);
  }

  return yearOptions;
};

export default generateYearOptions
