export const cepMask = (cep: string): string => {
  const numericCep = cep.replace(/\D/g, '').slice(0, 8);

  if (numericCep.length <= 5) {
    return numericCep;
  }

  return `${numericCep.slice(0, 5)}-${numericCep.slice(5)}`;
};
