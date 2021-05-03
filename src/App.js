import './App.css';

function App() {
  return (
    <div className="App">

      <header className="p-5 bg-danger text-white text-center">
        <h1 className="display-1">Quoi de neuf, Google Fonts™&nbsp;?</h1>
        <p className="h4">Le plus récentes, les plus <i>trendy</i> et les plus populaires polices Google.</p>
      </header>

      <div className="container min-vh-100">
        <div className="row my-5">
          <div className="col-lg-3 mb-4">
            <div style={{ position: "sticky", top: "0px" }}>
              <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
              <select id="sort" className="form-select mb-4">
                <option value="date">Les plus récentes</option>
                <option value="popularity">Les plus populaires</option>
                <option value="trending">Top 10 trending</option>
              </select>
              <div className="mb-3">
                <label for="text" className="form-label fw-bold mb-3">Tapez votre text</label>
                <textarea id="text" className="form-control">Portez ce vieux whisky au juge blond qui fume !? 0123456789</textarea>
              </div>
              <label for="range" className="form-label fw-bold mb-3">La taille de police</label>
              <input type="range" className="form-range" id="range" min="8" max="48" step="1" value="20" />
            </div>
          </div>
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
        </div>
      </div>
      <footer className="p-3 text-center bg-dark text-white">With Love &amp; React for Alyra</footer>
    </div >
  );
}

export default App;
