const FontsList = () => {
    return (
        <div className="col-lg-9">
            <section className="row mb-5">
                <h2 className="mb-3"><span className="badge bg-danger">Les plus récentes</span></h2>

                <article className="col-lg-6 mb-4">
                    <div className="shadow-sm border p-3 h-100">
                        <h2 className="h6 d-flex aling-items-center justify-content-between">
                            <span>Karantina</span><small>3 variant(s)</small>
                        </h2>
                        <p><span className="badge bg-dark">DISPLAY</span></p>
                        <p style={{ fontFamily: "Karantina", fontSize: "20px" }} className="sample">Portez ce vieux whisky au juge blond qui fume !? 0123456789</p>
                        <a rel="noopener noreferrer" target="_blank" className="text-danger" href="https://fonts.google.com/specimen/Karantina">Voir sur Google Fonts (ouvre un nouveau tab)</a>
                    </div>
                </article>

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
