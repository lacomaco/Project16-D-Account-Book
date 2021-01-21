import transactionService from '@src/services/transaction';
import { Income } from '@src/types/income';
import { Expenditure } from '@src/types/expenditure';
import { getFirstDateOfNextMonth, getFirstDateOfPreviousMonth } from '../date';

const getSWRGenerator = (
  accountbookId: number,
  startDate: Date,
  endDate: Date,
  beforeMonth: Date = getFirstDateOfPreviousMonth(startDate),
  afterMonth: Date = getFirstDateOfNextMonth(endDate),
): AsyncGenerator<(Income | Expenditure)[] | undefined, any, unknown> => {
  return transactionService.getTransactions(accountbookId, startDate, endDate, beforeMonth, afterMonth);
};

export default getSWRGenerator;
