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
        <div className="scrollbar">
            <ul role="list" className='px-6 divide-y divide-slate-200'>
                {people.map(person => (
                    <li key={person.id} className="flex bg-blue-200 items-center justify-start rounded-md mt-1 py-4 pl-2">
                        <img src={person.foto} alt="foto de perfil" className='h-12 w-12 rounded-full' />
                        <div className='ml-3 overflow-hidden'>
                            <p className='text-xl font-sans font-bold text-slate-950'>{person.nome}</p>
                            <p className='text-sm text-slate-500 truncate'>{person.telefone}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
