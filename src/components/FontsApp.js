import { useState } from 'react';

import FontsWidgets from './FontsWidgets';
import FontsList from './FontsList';

const FontsApp = () => {
    const [nbFont, setNbFont] = useState(10);
    return (
        <div className="container min-vh-100">
          <div className="row my-5">

            <FontsWidgets />
            <FontsList nbFont={nbFont} />

          </div>
        </div>
    );
};

export default FontsApp;
