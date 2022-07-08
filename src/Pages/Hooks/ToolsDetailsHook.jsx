import React, { useEffect, useState } from 'react';

const ToolsDetailsHook = (serviceId) => {
    const [tools, setTools] = useState({});
    useEffect(() => {
        fetch(`https://equipo-fullstack-app.herokuapp.com/tools/${serviceId}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [serviceId])

    return [tools];
};

export default ToolsDetailsHook;