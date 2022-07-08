import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    // setting up state
    const [token, setToken] = useState('');


    // useEffect hook
    useEffect(() => {
        const email = user?.user?.email;
        console.log(email);
        const currentUser = { userEmail: email };
        console.log(currentUser);

        if (email) {
            fetch(`https://equipo-fullstack-app.herokuapp.com/users/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Inside data tokennnnnn ::", data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })



        }
    }, [user])
    return [token]
};

export default useToken;