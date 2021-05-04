import GoogleFontLoader from 'react-google-font-loader';

const Font = (props) => {
    //const { family } = props;
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto',
                        weights: [400, '400i'],
                    },
                    {
                        font: 'Roboto Mono',
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />

            <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>
        </>
    )
}

export default Font;