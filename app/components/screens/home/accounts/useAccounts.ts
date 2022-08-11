import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";
import { IAccount } from "./types";

export const useAccounts = () => {
  const { user } = useAuth();

  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAccountsQuery = query(collection(db, 'accounts'), where('userId', '==', user?.uid))

  useEffect(() => {
    onSnapshot(getAccountsQuery, snapshot => {
      const accountsArr = snapshot.docs.map(s => ({
        _id: s.id,
        ...s.data()
      }) as IAccount);
      setAccounts(accountsArr)
      setIsLoading(false)
    })
  }, [])


  return {accounts, isLoading}
}