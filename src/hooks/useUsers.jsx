import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Authentication/Provider/AuthProvider";

const useUsers = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const { refetch, data: userInfo = [] } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://vocab-master-server-new.vercel.app/singleUser/users?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [userInfo, refetch];
};

export default useUsers;

// https://vocab-master-server.onrender.com/singleUser/users?email=nani@nana58.com
// https://vocab-master-server.onrender.com/singleUser/users?email=nani@nana58.com
//https://vocab-master-server-new.vercel.app
