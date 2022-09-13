/* eslint-disable */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import update from 'immutability-helper';

import './Game.css';
import Card from './Card';
import Pokemon from './Pokemon';

const pokedex = [
    new Pokemon('Glumanda', 'glumanda.png', 0.6, 8.5, 52, 43, 39),
    new Pokemon('Gengar', 'gengar.png', 1.5, 40.5, 65, 60, 60),
    new Pokemon('Relaxo', 'relaxo.png', 2.1, 460.0, 110, 65, 160),
    new Pokemon('Mew', 'mew.png', 0.4, 4.0, 100, 100, 100),
    new Pokemon('Bisasam', 'bisasam.png', 0.7, 6.9, 49, 49, 45),
    new Pokemon('Shiggy', 'shiggy.png', 0.5, 9.0, 48, 65, 44),
    new Pokemon('pichu', 'pichu.png', 0.3, 2.0, 40, 15, 20),
    new Pokemon('pikachu', 'pikachu.png', 0.4, 6.0, 55, 40, 34),
    new Pokemon('evoli', 'evoli.png', 0.3, 6.5, 55, 50, 55),
    new Pokemon('lugia', 'lugia.png', 5.2, 216.0, 90, 130, 106),
    new Pokemon('raupy', 'raupy.png', 0.3, 2.9, 30, 35, 45),
    new Pokemon('taubsi', 'taubsi.png', 0.3, 1.8, 45, 40, 40),
    new Pokemon('rattfratz', 'rattfratz.png', 0.3, 3.5, 56, 35, 30),
    new Pokemon('mauzi', 'mauzi.png', 0.4, 4.2, 45, 35, 40),
    new Pokemon('simsala', 'simsala.png', 1.5, 48.0, 50, 45, 55),
];

// Shuffle array
const shuffledPokedex = pokedex.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let computerPokemon = shuffledPokedex.slice(0, pokedex.length/2);

let playersPokemon = shuffledPokedex.slice(pokedex.length/2, pokedex.length);

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProperty: '',
            playersTurn: true,
            computerUncovered: false,
            player: playersPokemon,
            computer: computerPokemon,
        };
    }

    getSelectPropertyHandler() {
        return (property) => this.play(property);
      }

    compare(property) {
        let playersTurn = this.state.playersTurn;
        const firstPlayer = this.state.player[0];
        let player = update(this.state.player, { $splice: [[0, 1]] });
        const firstComputer = this.state.computer[0];
        let computer = update(this.state.computer, { $splice: [[0, 1]] });
        if (firstPlayer[property] > firstComputer[property]) {
            playersTurn = true;
            player = update(player, { $push: [firstPlayer, firstComputer] });
            if (computer.length === 0) {
                alert('Player wins');
                return;
            }
        } else if (firstPlayer[property] < firstComputer[property]) {
            playersTurn = false;
            computer = update(computer, { $push: [firstPlayer, firstComputer] });
            if (player.length === 0) {
                alert('Computer wins');
                return;
            }
        } else {
            player = update(player, { $push: [firstPlayer] });
            computer = update(computer, { $push: [firstComputer] });
        }

        this.setState(
            (state) =>
                update(state, {
                    $set: {
                        computerUncovered: false,
                        selectedProperty: '',
                        playersTurn,
                        player,
                        computer,
                    },
                }),
            () => {
                if (!playersTurn) {
                    setTimeout(() => {
                        const property = this.selectRandomProperty();
                        this.play(property);
                    }, 2000);
                }
            },
        );
    }

    play(property) {
        this.setState(
            (state) =>
                update(state, {
                    selectedProperty: { $set: property },
                    computerUncovered: { $set: true },
                }),
            () => {
                setTimeout(() => {
                    this.compare(property);
                }, 2000);
            },
        );
    }

    selectRandomProperty = () => {
        const properties = Object.keys(Pokemon.properties);
        const index = Math.floor(Math.random() * properties.length);
        return properties[index];
    };

    render() {
        const {
            playersTurn,
            player,
            computer,
            selectedProperty,
            computerUncovered,
        } = this.state;
        const { title } = this.props;

        return (
            <div>
                <h1>{ title }</h1>
                <div className="info">
                    {playersTurn ? 'Du bist ' : 'Der Computer ist ' }
                    an der Reihe
                </div>
                <div className="cards">
                    <Card
                        pokemon={player[0]}
                        uncovered="true"
                        selectedProperty={selectedProperty}
                        onSelectProperty={this.getSelectPropertyHandler()}
                    />
                    <Card
                        pokemon={computer[0]}
                        uncovered={computerUncovered}
                        selectedProperty={selectedProperty}
                    />
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    title: 'Supertrumpf - Pokemon',
};

Game.propTypes = {
    title: PropTypes.string,
};
