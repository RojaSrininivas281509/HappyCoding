import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BindDataTable() {
    const [actors, setActors] = useState([]); // Start with an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/1/');
                const data = response.data;

                // Create an actor object with the name and films
                const actorData = {
                    name: data.name,
                    films: data.films
                };
                setActors((prevActors) => {
                    // Check if the actor already exists
                    const exists = prevActors.some(actor => actor.name === actorData.name);
                    if (!exists) {
                        return [...prevActors, actorData];
                    }
                    return prevActors; // Return the previous state if duplicate
                });

                //setActors((prevActors) => [...prevActors, actorData]);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []); // Only run once on mount

    return (
        <div>
            <h1>Actors and Their Movies</h1>
            <table>
                <thead>
                    <tr>
                        <th>Actor Name</th>
                        <th>Movies</th>
                    </tr>
                </thead>
                <tbody>
                    {actors.map((actor, index) => (
                        <tr key={index}>
                            <td>{actor.name}</td>
                            <td>
                                {actor.films.length > 0 ? (
                                    actor.films.join(', ') // Display film URLs or names
                                ) : (
                                    'No films available'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
