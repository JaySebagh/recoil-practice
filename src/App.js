import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil'

import './App.css';

const filmsState = atom({
    key: 'films',
    default: []
})

function App() {
    const [films, setFilms] = useRecoilState(filmsState);

    useEffect(() => {
        const getRepos = async () => {
            const url = "https://ghibliapi.herokuapp.com/films";
            const res = await fetch(url);
            const body = await res.json();
            setFilms(body)
        };

        getRepos();
    }, [setFilms]);

    return (
        <div>
            {films.map((film, i) => {
                return <div key={i}>
                    <div className="film">
                        <h1>{film.title}</h1>
                        <p className="release">({film.release_date})</p>
                        <p>{film.director}</p>
                    </div>
                    <p>{film.description}</p>
                </div>
            })}
        </div>
    );
}

export default App;
