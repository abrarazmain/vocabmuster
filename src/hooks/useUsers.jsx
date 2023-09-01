import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Authentication/Provider/AuthProvider';

const useUsers = () => { 
    const {user, loading}=useContext(AuthContext)
   

    const {refetch, data:userInfo =[]}=useQuery({
        queryKey:["email", user?.email],
        enabled:!loading,
        queryFn:async ()=>{
            const res = await fetch(`http://localhost:5000/singleUser/users?email=${user?.email}`)
            return res.json();
        }
    })
    return [userInfo, refetch]
};

export default useUsers;



// http://localhost:5000/singleUser/users?email=nani@nana58.com