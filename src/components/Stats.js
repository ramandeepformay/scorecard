import React from "react";

const Stats=(props)=>{
    //calculating total players
    const total = props.totalPlayers.length;
    // calculating total points by adding all the scores of an individual players
    const totalScore = props.totalPlayers.reduce((acc, cur)=>{
        return acc+cur.score
    },0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{total}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;