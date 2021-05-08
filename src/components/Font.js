import GoogleFontLoader from 'react-google-font-loader';

const Font = (props) => {
    const { family, variants, category, files, text, size } = props;
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
            <div className="shadow-sm border p-3 h-100">
              <h2 className="h6 d-flex aling-items-center justify-content-between">
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
                 href={`${files[0]}`}>
                Voir sur Google Fonts (ouvre un nouveau tab)
              </a>
            </div>
          </article>
        </>
    );
};

export default Font;

// 28 : {variants.length} variant(s)
