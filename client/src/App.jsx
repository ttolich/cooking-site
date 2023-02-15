import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import {Spinner} from "react-bootstrap";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).catch(e => {
            if (window.location.pathname!=="/registration") {
                window.location.pathname="/registration"
            }
        }).finally(() => setLoading(false))
    }, [user])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <AppRouter/>
    );
}

export default App;
