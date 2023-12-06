import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { userRef } from "../utils/FirebaseConfig";
import { userType } from "../utils/Types";

function useFetchUsers() {
  const [users, setUsers] = useState<Array<userType>>([]);
  const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);

  useEffect(() => {
    if (uid) {
      const getUser = async () => {
        const firestoreQuery = query(userRef, where("uid", "!=", uid));
        const data = await getDocs(firestoreQuery);
        const firebaseUsers: Array<userType> = [];

        data.forEach((user) => {
          const userData: userType = user.data() as userType;
          firebaseUsers.push({
            ...userData,
            label: userData.name,
          });
        });
        setUsers(firebaseUsers);
      };
      getUser();
    }
  }, [uid]);
  return [users];
}

export default useFetchUsers;
