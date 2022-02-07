import react, {useEffect, useState} from 'react'

import { Auth } from 'aws-amplify';

import { UserInfo } from 'types';

function useUserInfo() {
    const [userInfo, setUserInfo] = useState<UserInfo>();

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(({ username, attributes }) => {
            if (username && attributes.email) {
                setUserInfo({ username: username, email: attributes.email });
            }
        });
    }, []);

    return userInfo
}

export {useUserInfo}