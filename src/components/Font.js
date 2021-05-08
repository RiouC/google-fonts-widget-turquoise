import { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const Font = (props) => {
    const { family, variants, category, files, text, size } = props;
    const [dropdown, setDropdown] = useState(false);

    const handleClickSummary = () => {
        setDropdown(!dropdown);
    };
    return (
        <>
          <GoogleFontLoader
            fonts={[
                {
                    font: family,
                    weights: [400, '400i'],
                },
                {
                    font: 'Roboto Mono',
                    weights: [400, 700],
                },
            ]}
            subsets={['cyrillic-ext', 'greek']}
          />

          <article className="col-lg-6 mb-4" itemScope itemType="https://schema.org/Thing">
            <div className={dropdown
                            ? "shadow-sm border p-3 h-100 d-flex flex-column justify-content-between"
                            : "shadow-sm border p-3 h-100 d-flex flex-column justify-content-start"}>
              <h2 className="h6 d-flex align-items-center justify-content-between">
                <span itemProp="name">{family}</span>
                <small>
                  {variants.length} variant(s)
                </small>
              </h2>
              <p>
                <span className="badge bg-dark">{category.toUpperCase()}</span>
              </p>
              <p style={{ fontFamily: family,
                          category: category,
                          fontSize: `${size}px` }}
                 className="sample">
                {text}
              </p>
              <a rel="noopener noreferrer" target="_blank"
                 className="text-danger"
                 itemProp="url"
                 href={`https://fonts.google.com/specimen/${family.split(' ').join('+')}`}>
                Voir sur Google Fonts (ouvre un nouvel onglet)
              </a>
              <div className="d-flex justify-content-end">
                <details aria-label="Téléchargement direct des polices en ttf ou otf">
                  <summary className="pe-3" onClick={handleClickSummary}>
                    DDL
                  </summary>
                  <ul>
                    {Object.keys(files).map(f =>
                        <li key={f}><a href={files[f]}>{f}</a></li>
                    )}
                  </ul>
                </details>
              </div>
            </div>
          </article>
        </>
    );
};

export default Font;
