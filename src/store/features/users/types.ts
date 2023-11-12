export interface UserStructure {
  id: number;
  nickname: string;
  firstName: string;
  lastName: string;
  picture: string;
  isFriend: boolean;
  age: number;
  aboutMe: string;
}

export interface UsersStateStructure {
  list: UserStructure[];
}
