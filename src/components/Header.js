const Header = ({ darkMode, setDarkMode }) => {
    const handleChangeDarkMode = () => {
        setDarkMode(!darkMode)
    };
    return (
        <header id="top" className="p-5 bg-danger text-white text-center">
          <h1 className="display-1" id="header-title">Google Fonts™&nbsp;? Widget</h1>
          <p className="h4">Les plus récentes, <i>trendy</i> et populaires polices Google à portée de main.</p>
          <div className="form-check form-switch align-top d-inline-block">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {darkMode ? "☽" : "☀"}
            </label>
            <input
              id="flexSwitchCheckDefault"
              className="form-check-input"
              type="checkbox"
              aria-label="Dark Mode"
              key="flexSwitchCheckDefault"
              name="flexSwitchCheckDefault"
              onChange={handleChangeDarkMode}
              checked={darkMode}
              tabIndex="0">
            </input>
          </div >
        </header>
    );
};

export default Header;
