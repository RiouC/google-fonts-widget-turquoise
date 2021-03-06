import { useState } from 'react';

import FontsWidgets from './FontsWidgets';
import FontsList from './FontsList';

const FontsApp = () => {
    const [fontType, setFontType] = useState("date");
    const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
    const [size, setSize] = useState(20);
    const fontTypeMessages = {'date': 'Les plus récentes',
                              'popularity': 'Les plus populaires',
                              'trending': 'Top 10 trending'};
    // const [nbFont, setNbFont] = useState(10);
    // setNbFont(10);
    return (
        <div className="container min-vh-100">
          <div className="row my-5">

            <FontsWidgets fontType={fontType} setFontType={setFontType}
                          text={text} setText={setText}
                          size={size} setSize={setSize}
                          fontTypeMessages={fontTypeMessages}
            />
            <FontsList
              /* nbFont={nbFont} */
              fontType={fontType}
              text={text}
              size={size}
              fontTypeMessages={fontTypeMessages}
            />

          </div>
        </div>
    );
};

export default FontsApp;
