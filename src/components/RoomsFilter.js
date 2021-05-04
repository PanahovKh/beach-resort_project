import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items) => {
    return ['all', ...new Set(items.map(item => item.type))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const { 
        type,
        // capacity,
        // price,
        // minPrice,
        // maxPrice,
        // minSize,
        // maxSize,
        // breakfast,
        // pets,    
        handleChange
    } = context
    
    let types = getUnique(rooms)    
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ))

    return (
        <section className='filter-container'>
            <Title title='search form' />
            <form className='filter-form'>
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                            {types}
                    </select>
                </div>

            </form>
        </section>
    )
}
