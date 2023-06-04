import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });
    

    return (
        <div>
            <ReactHelmet title={'Admin Dashboard'}/>
            <h1>Hi, Welcome Back {user.displayName}!</h1>
        </div>
    );
};

export default AdminHome;