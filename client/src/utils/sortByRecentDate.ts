import { Income } from '@src/types/income';
import { Expenditure } from '@src/types/expenditure';

export const sortByRecentDate = (transactions: Array<Income | Expenditure>): Array<Income | Expenditure> => {
  const sortedTransactions = transactions.slice().sort((transaction1, transaction2) => {
    return new Date(transaction2.date).getTime() - new Date(transaction1.date).getTime();
  });
  return sortedTransactions;
};
