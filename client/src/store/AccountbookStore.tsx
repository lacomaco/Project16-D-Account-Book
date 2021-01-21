import RootStore from './RootStore';
import Accountbook, { CreateAccountbookBody } from '@src/types/accountbook';
import { observable, action, makeObservable } from 'mobx';
import accountbookService from '@src/services/accountbook';

export default class AccountbookStore {
  rootStore: RootStore;

  @observable
  accountbooks: Accountbook[] = [];

  @observable
  currentAccountbookId = 0;

  @observable
  accountbook: Accountbook | undefined = undefined;

  @observable
  isLoading = true;

  @observable
  noChange = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  updateAccountbooks = async (): Promise<void> => {
    const accountbooks = await accountbookService.getAccountbooks();
    this.isLoading = false;
    this.accountbooks = accountbooks;
  };

  updateAccountbookSettings = async (accountbook: Accountbook): Promise<void> => {
    this.accountbook = accountbook;
    this.isLoading = false;
  };

  updateAccountbook = async (accountbook: Accountbook): Promise<void> => {
    const updatedAccountbook = await accountbookService.updateAccountbook(accountbook);
    this.updateAccountbookById(updatedAccountbook);
  };

  @action
  updateAccountbookById = (accountbook: Accountbook): void => {
    this.updateAccountbooks();
    this.accountbook = accountbook;
  };

  @action
  deleteAccountbook = (AccountbookId: number): void => {
    this.accountbooks = this.accountbooks.filter((item) => item.accountbookId !== AccountbookId);
  };

  createAccountbook = async ({ title, color, description }: CreateAccountbookBody): Promise<void> => {
    const accountbook = await accountbookService.createAccountbook({ title, color, description });
    this.addAccountbook(accountbook);
  };

  @action
  addAccountbook = (accountbook: Accountbook): void => {
    this.accountbooks.push(accountbook);
    this.rootStore.userStore.accountAuthorList?.push({
      accountbookId: accountbook.accountbookId as number,
      authority: true,
    });
  };

  @action
  setIsLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };

  @action
  setNoChangeTrue = (): void => {
    this.noChange = true;
  };

  @action
  setNoChangeFalse = (): void => {
    this.noChange = false;
  };
}
