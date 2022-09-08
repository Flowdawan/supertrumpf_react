import * as React from 'react';

import './Card.css';
import Pokemon from './Pokemon';

export default function Card() {
    const glumanda = new Pokemon('Glumanda', 'placeholder.png', '3.3', '6000', '70', '20', '15');
    return (
    <div className="card">
        <h1>{ glumanda.name }</h1>
        <img src={`${process.env.PUBLIC_URL}/${glumanda.image}`} alt="glumanda.name" height="200" width="200" />
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
}
