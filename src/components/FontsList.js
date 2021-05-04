import { useState, useEffect } from 'react';
import Font from './Font';

const FontsList = () => {
    const [fontsList, setFontsList] = useState([{
        "kind": "webfonts#webfont",
        "family": "Antic",
        "variants": [
            "regular"
        ],
        "subsets": [
            "latin"
        ],
        "version": "v4",
        "lastModified": "2012-07-25",
        "files": {
            "regular": "http://themes.googleusercontent.com/static/fonts/antic/v4/hEa8XCNM7tXGzD0Uk0AipA.ttf"
        }
    }])

    useEffect(() => {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Nous n'avons pas pu lire la liste des fonts, status : ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setFontsList(data.results);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    // fontsList = [font1, font2, font3, ...]

    return (
        <div className="col-lg-9">
            <section className="row mb-5">
                <h2 className="mb-3"><span className="badge bg-danger">Les plus récentes</span></h2>

                {fontsList.map((popularity) => {
                    return <Font key={popularity.item} family={popularity.family} category={popularity.category} />;
                })}

                <article className="col-lg-6 mb-4">
                    <div className="shadow-sm border p-3 h-100">
                        <h2 className="h6 d-flex aling-items-center justify-content-between">
                            <span>Orelega One</span><small>1 variant(s)</small></h2>
                        <p><span className="badge bg-dark">DISPLAY</span>
                        </p>
                        <p style={{ fontFamily: "Orelega One", fontSize: "20px" }} className="sample">Portez ce vieux whisky au juge blond qui fume !? 0123456789</p>
                        <a rel="noopener noreferrer" target="_blank" className="text-danger" href="https://fonts.google.com/specimen/Orelega+One">Voir sur Google Fonts (ouvre un nouveau tab)</a>
                    </div>
                </article>

            </section>
        </div>
    );
};

export default FontsList;
