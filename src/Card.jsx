import * as React from 'react';

import './Card.css';
import Pokemon from './Pokemon';

const uncovered = false;

export default function Card() {
    const glumanda = new Pokemon('Glumanda', 'placeholder.png', '3.3', '6000', '70', '20', '15');
    const front = (
        <div className="card">
            <h1>{ glumanda.name ? glumanda.name : 'Unbekannt' }</h1>
            {glumanda.image && (
            <img src={`${process.env.PUBLIC_URL}/${glumanda.image}`} alt="glumanda.name" height="200" width="200" />
            )}
            <table>
                <tbody>
                    {Object.keys(Pokemon.properties).map((property) => {
                        const pokemonProperty = Pokemon.properties[property];
                        return (
                            <tr key={property}>
                                <td>
                                    {pokemonProperty.label}
                                </td>
                                <td>
                                    {glumanda[property]}
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
