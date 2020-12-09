import Category, { CategoryRequest } from '../types/category';
import instance from '../api/axios';

const categoryAPIAddress = {
  getIncome: '/api/categories/income',
  getExpenditure: '/api/categories/expenditure',
  createIncome: '/api/categories/income',
  createExpenditure: '/api/categories/expenditure',
};

export default {
  getIncomeCategoryById: async (id: number): Promise<Category[]> => {
    const response = await instance.get(categoryAPIAddress.getIncome, {
      params: {
        accountbook_id: id,
      },
    });
    return response.data;
  },
  getExpenditureCategoryById: async (id: number): Promise<Category[]> => {
    const response = await instance.get(categoryAPIAddress.getExpenditure, {
      params: {
        accountbook_id: id,
      },
    });
    return response.data;
  },
  createIncomeCategory: async (incomeCategory: CategoryRequest): Promise<Category> => {
    const response = await instance.post(categoryAPIAddress.createIncome, incomeCategory);
    return response.data;
  },
  createExpenditureCategory: async (expenditureCategory: CategoryRequest): Promise<Category> => {
    const response = await instance.post(categoryAPIAddress.createExpenditure, expenditureCategory);
    return response.data;
  },
};