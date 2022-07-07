import React, { useEffect, useState } from 'react';

const makeAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)
    useEffect(() => {

        const email = user?.email;

        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Token ${localStorage.getItem('accessToken')}`
                }
            })

                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }

    }, [user])
    return [admin,adminLoading]
}


export default makeAdmin;