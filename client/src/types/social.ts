export interface AddUserBody {
  accountbookId: number;
  userId: number;
}

export interface DeleteUserBody {
  accountbookId: number;
  userId: number;
}

export interface SearchedUser {
  id: number;
  nickname: string;
  profileUrl: string;
  email: string;
  provider: string;
}

export interface UserAccountbook {
  id: number;
  authority: boolean;
  user: SearchedUser;
}
