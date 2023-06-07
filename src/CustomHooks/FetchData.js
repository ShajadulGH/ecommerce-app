import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const FetchData = (collectionName) => {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);

    try {
      const productsRef = collection(db, collectionName);
      const q = query(productsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllData(data);
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(allData);
  return {
    allProducts: allData,
    isLoading,
  };
};
export default FetchData;
