import { useState, useEffect } from 'react';
import Font from './Font';

const FontsList = (props) => {
    const { fontType, text, size, fontTypeMessages } = props;
    const [fontsList, setFontsList] = useState([]);
    const apiKey = process.env.REACT_APP_GOOGLEFONTSWIDGET_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=${fontType}`;

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Nous n'avons pas pu lire la liste des fonts, status : ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setFontsList(data.items);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [url]);

    return (
        <>
          <main className="col-lg-9">
            <section className="row mb-5">
              <h2 className="mb-3 display-font-type">
                <span className="badge bg-danger">{fontTypeMessages[fontType]}</span>
              </h2>

              {fontsList.slice(0,10).map(ft => <Font key={ft.family}
                                                     family={ft.family}
                                                     variants={ft.variants}
                                                     files={ft.files}
                                                     category={ft.category}
                                                     text={text}
                                                     size={size}
                                               />)}
            </section>
          </main>
          <nav className="text-muted text-end">
            <a href="#top"
               className="text-reset text-decoration-none link-secondary"
               aria-label="Retour en haut de la page"
               tabIndex="0">
              <button className="btn btn-secondary">
                Top
              </button>
            </a>
          </nav>
        </>
    );
};

export default FontsList;
