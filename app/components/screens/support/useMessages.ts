import dayjs from "dayjs";
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

import { IMessage } from "./types";

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMessagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'asc'))

  useEffect(() => {
    onSnapshot(getMessagesQuery, snapshot => {
      const messagesArr = snapshot.docs.map(s => s.data()?.timestamp ? 
      ({
        _id: s.id,
        ...s.data(),
        timestamp: dayjs.unix(s.data()?.timestamp.seconds).format('HH:mm'),
      }) as IMessage : ({
        _id: s.id,
        ...s.data()
      }) as IMessage);
      setMessages(messagesArr)
      setIsLoading(false)
    })
  }, [])


  return {messages, isLoading}
}