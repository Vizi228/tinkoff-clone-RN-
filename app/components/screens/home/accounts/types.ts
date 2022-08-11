export interface IAccount {
  _id: string,
  userId: string,
  balance: number,
  cardNumber: string,
  currency: TypeCurrency,
  name: TypeName
}
export type TypeCurrency = 'RUB' | 'USD';
export type TypeName = 'Tinkoff Black' | 'Tinkoff All Airlines';