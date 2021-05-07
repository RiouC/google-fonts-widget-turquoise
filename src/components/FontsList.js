import { useState, useEffect } from 'react';
import Font from './Font';

const FontsList = (props) => {
    const { nbFont, fontType, size } = props;
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

    // fontsList = [font1, font2, font3, ...]
    return (
        <div className="col-lg-9">
          <section className="row mb-5">
            <h2 className="mb-3">
              <span className="badge bg-danger">Les plus récentes</span>
            </h2>

            {fontsList.slice(0,nbFont).map(ft => <Font key={ft.family}
                                                       family={ft.family}
                                                       variants={ft.variants}
                                                       files={ft.files}
                                                       size={size}
                                                 />)}

          </section>
        </div>
    );
};

export default FontsList;
