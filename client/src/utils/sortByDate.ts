import CsvTransaction from '@src/types/csvTransaction';

export const sortByDate = (data: CsvTransaction[], key: string): CsvTransaction[] => {
  data.sort((a, b) => {
    return a[key] - b[key];
  });
  return data;
};
