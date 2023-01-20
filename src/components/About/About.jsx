import style from "./About.module.css"

const About = () => {
    return (
        <div className={style.contenedor}>
            <h1>About</h1>
            <img src="./Anthony_foto.jpeg" alt="foto Anthony Guzmán"/>
                <h3>Anthony Guzmán</h3>
                <p>Hey!! Soy Anthony Guzmán, y este es mi primer proyecto usando React y Javascript. </p>
                <h3>App Rick & Morty</h3>
                <p>Esta app , permite buscar personajes de la serie animada desde una API. Dentro de sus funcionalidades están:
                </p>
                <ul>
                    <li>Agregar el personaje en el input "Agregar" </li>
                    <li>Eliminar la tarjeta presionando el boton "X"</li>
                    <li>ETC</li>
                </ul>
        </div>
    )
}

export default About;