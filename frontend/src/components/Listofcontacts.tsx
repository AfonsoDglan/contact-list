'use client'

import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Contacts() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/contact/')
            .then(function (response) {
                setPeople(response.data);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <ul role="list">
                {people.map(person => (
                    <li key={person.id} className="group/item hover:bg-slate-100 ...">
                        <img src={person.foto} alt="foto de perfil" />
                        <div>
                            <a href={person.url}>{person.telefone}</a>
                            <p>{person.nome}</p>
                        </div>
                        <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href={`tel:${person.phone}`}>
                            <span className="group-hover/edit:text-gray-700 ...">Call</span>
                            <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
                                {/* <!-- ... --> */}
                            </svg>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
