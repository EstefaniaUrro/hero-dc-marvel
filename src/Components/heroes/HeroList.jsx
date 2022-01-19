import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
    const heroes =  useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
            <div className="row row-cols-1  g-4">
                {
                    heroes.map(hero => {
                        return (
                            <HeroCard
                                key={hero.id}
                                {...hero}/>
                        )
                    })
                }
            </div>


    )
}

export default HeroList
