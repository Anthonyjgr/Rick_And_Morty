import style from "./Forms.module.css"
import React from 'react'
import Validate from "./validation";

const Form = (props) => {

    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    })
    const [errorsData, setErrorsData] = React.useState({
        username: '',
        password: '',
    })

    function handleInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrorsData(Validate({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSumbmit(e) {
        e.preventDefault()
        props.login(userData)
    }

    return (
        <form onSubmit={((e) => { handleSumbmit(e) })}>
            <div className={style.contenedor}>
                <div className={style.central}>
                    <div className={style.login}>
                        <div className={style.welcome}>Welcome</div>
                        <label className={style.loginform}>
                            <input onChange={(e) => handleInputChange(e)} type="text" value={userData.username} name="username" placeholder="User" required />
                            <p className={style.errors}>{errorsData.username}</p>
                            <input onChange={(e) => handleInputChange(e)} type="password" value={userData.password} name="password" placeholder="Password" autoComplete="on" required />
                            {userData.password < 1 && <p className={style.errors}>{errorsData.password}</p>}
                            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default Form;