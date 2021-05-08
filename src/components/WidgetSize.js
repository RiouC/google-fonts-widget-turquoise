const WidgetSize = ({ size, setSize }) => {
    const handleChangeInput = (e) => {
        setSize(e.target.value);
    };

    return (
        <>
          <label htmlFor="range"
                 className="form-label fw-bold mb-3">
            La taille de police
          </label>
          <input type="range" id="range" min="8" max="48" step="1"
                 className="form-range"
                 value={size}
                 onChange={handleChangeInput}
                 aria-label="réglette pour changer la taille de la police"
          />
        </>
    );
};

export default WidgetSize;
