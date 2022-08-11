import { collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../../firebase";
import { IAccount } from "../home/accounts/types";
export const handleTransfer = async (fromAccount: IAccount, cardNumber: string, sum: string) => {
    try {
      let accountToId = '';
      let currentToBalance = '';

      const querySnapshot = await 
      getDocs(query(collection(db, 'accounts'), 
        where('cardNumber' , '==', cardNumber), limit(1)));
      querySnapshot.docs.forEach(doc => {
        accountToId = doc.id
      })

      const docRefTo = doc(db, 'accounts', accountToId);
      const docSnapTo = await getDoc(docRefTo);

      if(docSnapTo.exists()) {
        currentToBalance = docSnapTo.data().balance
      } else {
        Alert.alert('The card where you are sending money was not found')
      }

      await updateDoc(docRefTo, {
        balance: currentToBalance + Number(sum)
      })

      const docRefFrom = doc(db, 'accounts', fromAccount._id);

      await updateDoc(docRefFrom, {
        balance: fromAccount.balance - Number(sum)
      })
    } catch (error: any) {
      Alert.alert('Error transfer', error.message)
    }
}