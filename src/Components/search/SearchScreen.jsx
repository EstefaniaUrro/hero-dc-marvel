import React,{useMemo} from 'react'
import { useLocation, useNavigate } from 'react-router'; 
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {

    const naviegate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText : q
    });

    const { searchText } = formValues;


    const handleSubmit = (e) =>{
        e.preventDefault();
        naviegate(`?q=${searchText}`)
    }

    const heroes = useMemo(() => getHeroesByName(q), [q]);


    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h3>Buscar héroe</h3>

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Ingrese un heroe a buscar"
                            className="form-control"
                            name="searchText"
                            onChange={ handleInputChange }
                            value={ searchText }
                            autoComplete="off"
                        />

                        <button 
                            className="btn btn-primary" 
                            type="submit">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Resultados</h3>
                    {
                        heroes.map(hero =>(
                            <HeroCard 
                                key={hero.id} 
                                {...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
