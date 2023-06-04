import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import useAuth from '../../../Hooks/useAuth';

const AdminHome = () => {

    const {user} = useAuth();

    return (
        <div>
            <ReactHelmet title={'Admin Dashboard'}/>
            <h1>Hi, Welcome Back {user.displayName}!</h1>
        </div>
    );
};

export default AdminHome;