import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { IStory } from "./types";

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStoriesQuery = query(collection(db, 'stories'))

  useEffect(() => {
    onSnapshot(getStoriesQuery, snapshot => {
      const storiesArr = snapshot.docs.map(s => ({
        _id: s.id,
        ...s.data()
      }) as IStory);
      setStories(storiesArr)
      setIsLoading(false)
    })
  }, [])


  return {stories, isLoading}
}