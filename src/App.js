import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const getRepos = async () => {
            const url = "https://ghibliapi.herokuapp.com/films";
            const res = await fetch(url);
            const body = await res.json();
            console.log(body)
        };

        getRepos();
    }, []);

    return (
        <div>
            hi
        </div>
    );
}

export default App;
