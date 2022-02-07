import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Homepage from 'components/Homepage';
import { useUserInfo } from 'hooks';
import { UserInfo } from 'types';


const Home: NextPage = () => {
    const router = useRouter();
    const { route, user } = useAuthenticator();

    const userInfo = useUserInfo();

    return <Homepage userInfo={userInfo} />;
};

export default Home;