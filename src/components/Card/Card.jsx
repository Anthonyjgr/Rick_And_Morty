import style from "./Card.module.css"
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteFavorites, addFavorites } from "../redux/actions";


export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={style.contenedor}>
         <div className={style.tarjeta}>
            <div className={style.divButton}>
               <button className={style.btn} onClick={onClose}>X</button>
            </div>
            <div className={style.cardText}>
               <Link to={`/detail/${id}`}>
                  <h2 className={style.value}><span className={style.key}>Name:</span> {name}</h2>
               </Link>
               <h2 className={style.value}><span className={style.key}>Name:</span> {species}</h2>
               <h2 className={style.value}><span className={style.key}>Name:</span> {gender}</h2>
            </div>
            <img src={image} alt={name} />
         </div>
      </div>
   );
}


