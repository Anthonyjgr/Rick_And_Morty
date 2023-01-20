import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      // <div className={style.contenedor}>{
      <div className={style.test}>{
         characters.map(({ name, species, gender, image, id }) => {
            return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
            />
         })
      }</div>
   )
}

