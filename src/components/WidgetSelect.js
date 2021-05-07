const WidgetSelect = (props) => {
    const { fontType, setFontType } = props;
    const handleChangeSelect = (e) => {
        console.log(e.target.value);
        setFontType(e.target.value);
    };
    return (
        <>
          <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
          <select id="sort"
                  className="form-select mb-4"
                  value={fontType}
                  onChange={handleChangeSelect}>
            <option value="date">Les plus récentes</option>
            <option value="popularity">Les plus populaires</option>
            <option value="trending">Top 10 trending</option>
          </select>
        </>
    );
}

export default WidgetSelect;
