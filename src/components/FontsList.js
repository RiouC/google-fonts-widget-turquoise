import { useState, useEffect } from 'react';
import Font from './Font';

const FontsList = (props) => {
    const { fontType, text, size, fontTypeMessages } = props;
    const [fontsList, setFontsList] = useState([]);

    useEffect(() => {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDgpNxmPEhDnoT78StxuEGY0IsEfxcxcVI&sort=${fontType}`)
            .then((response) => {
                console.log("response: ");
                console.log(response);
                if (!response.ok) {
                    throw new Error(
                        `Nous n'avons pas pu lire la liste des fonts, status : ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                console.log("data.items: ");
                console.log(data.items);
                setFontsList(data.items);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [fontType]);

    return (
        <div className="col-lg-9">
          <section className="row mb-5">
            <h2 className="mb-3 display-font-type">
              <span className="badge bg-danger">{fontTypeMessages[fontType]}</span>
            </h2>

            {fontsList.slice(0,10).map(ft => <Font key={ft.family}
                                                       family={ft.family}
                                                       variants={ft.variants}
                                                       files={ft.files}
                                                       text={text}
                                                       size={size}
                                                 />)}

          </section>
        </div>
    );
};

export default FontsList;
