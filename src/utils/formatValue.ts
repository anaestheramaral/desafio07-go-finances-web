const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

// export const formatDat = new Intl.DateTimeFormat('pt-BR', {
//   year: 'numeric',
//   month: 'long',
//   date: '2-digit',
// }).format;

export default formatValue;
