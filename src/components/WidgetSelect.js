const WidgetSelect = (props) => {
    const { fontType, setFontType, fontTypeMessages } = props;
    const handleChangeSelect = (e) => {
        console.log(e.target.value);
        setFontType(e.target.value);
    };
    return (
        <>
          <label
            className="fw-bold mb-2"
            htmlFor="sort"
            aria-label="Choisissez comment trier les polices">
            Afficher des polices
          </label>

          <select id="sort"
                  className="form-select mb-4"
                  value={fontType}
                  onChange={handleChangeSelect}>
            <option value="date">{fontTypeMessages.date}</option>
            <option value="popularity">{fontTypeMessages.popularity}</option>
            <option value="trending">{fontTypeMessages.trending}</option>
          </select>
        </>
    );
};

export default WidgetSelect;
