import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';

const UserHome = () => {

    const {user} = useAuth();

    return (
        <div>
            <ReactHelmet title={'User Dashboard'}/>
            <h1>Hi, Welcome Back {user.displayName}!</h1>
        </div>
    );
};

export default UserHome;