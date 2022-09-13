import * as React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Pokemon from './Pokemon';

export default function Card({
    pokemon, uncovered, onSelectProperty, selectedProperty,
    }) {
    const front = (
        <div className="card">
            <h1>{ pokemon.name ? pokemon.name : 'Unbekannt' }</h1>
            {pokemon.image && (
            <img src={`${process.env.PUBLIC_URL}/${pokemon.image}`} alt={pokemon.name} height="200" width="200" />
            )}
            <table>
                <tbody>
                    {Object.keys(Pokemon.properties).map((property) => {
                        const pokemonProperty = Pokemon.properties[property];
                        return (
                            <tr
                                key={property}
                                className={selectedProperty === property ? 'active' : ''}
                                onClick={() => onSelectProperty(property)}
                            >
                                <td>
                                    {pokemonProperty.label}
                                </td>
                                <td>
                                    {pokemon[property]}
                                    &nbsp;
                                    {pokemonProperty.unit}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

    const back = (
        <div className="card back" />
    );

    if (uncovered) {
        return front;
    }
    return back;
}

Card.propTypes = {
    uncovered: PropTypes.bool.isRequired,
    pokemon: PropTypes.oneOfType([PropTypes.object]).isRequired,
    onSelectProperty: PropTypes.func,
    selectedProperty: PropTypes.string,
};

Card.defaultProps = {
    // eslint-disable-next-line
    onSelectProperty: () => console.log('Missing onSelectProperty function'),
    selectedProperty: '',
};
