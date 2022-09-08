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
                <tr>
                    <td>Größe</td>
                    <td>
                        {glumanda.size}
                        m
                    </td>
                </tr>
                <tr>
                    <td>Gewicht</td>
                    <td>
                        {glumanda.weight}
                        kg
                    </td>
                </tr>
                <tr>
                    <td>Angriff</td>
                    <td>{glumanda.attack}</td>
                </tr>
                <tr>
                    <td>Verteidigung</td>
                    <td>{glumanda.defense}</td>
                </tr>
                <tr>
                    <td>Geschwindigkeit</td>
                    <td>{glumanda.speed}</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
