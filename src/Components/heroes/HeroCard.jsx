import React from 'react'
import { Link } from "react-router-dom";

const HeroCard = ({id,superhero,alter_ego,first_appearance,characters}) => {
    //
    return (
        <div className="col col-sm-3 col-md-4 mb-3">
            <div className="card h-100">
                <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                        <li className="list-group-item"><b>Primera aparición:</b> {first_appearance}</li>
                        <li className="list-group-item"><b>Personajes:</b> {characters}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <Link
                        to={`/hero/${id}`}>
                        Ver más...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
