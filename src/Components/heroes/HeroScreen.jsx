import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById'

const HeroScreen = () => {
    const {heroId}  = useParams();
    const navigate = useNavigate();
    
    const hero =  useMemo(() => getHeroById(heroId), [heroId]);
    if(!hero){
            return <Navigate to='/' />
    }
    
    const {id,superhero,publisher,alter_ego,first_appearance,characters} = hero;
                
    const handleReturn = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h1>{publisher}</h1>
            <div className="card mb-3" style={{maxWidth:'100%'}}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={`/assets/${id}.jpg`} className="img-fluid rounded-start" alt={superhero}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{superhero}</h2>
                            <h5 className="card-title"><b>Alter ego:</b> {alter_ego}</h5>
                            <h5 className="card-title"><b>Primera aparición:</b> {first_appearance}</h5>
                            <h5 className="card-title"><b>Personajes:</b> {characters}</h5>
                        </div>
                        <button 
                            className="btn btn-primary"
                            onClick={ handleReturn }>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroScreen
