import React, { useEffect } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

async function signOut() {
    try {
        await DataStore.clear();
        Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Page() {
    const router = useRouter();

    useEffect(() => {
        signOut().then(() => {
            router.push('/');
        });
    }, [router]);

    return <p>Signing Out...</p>;
}

export default Page;