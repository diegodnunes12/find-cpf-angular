import { AccountInterface } from './account.interface';

export interface CustomersInterface {
  name: string;
  cpf: number;
  accounts: AccountInterface[];
}
