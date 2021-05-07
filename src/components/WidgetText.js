const WidgetText = (props) => {
    const { text, setText } = props;
    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    return (
        <div className="mb-3">
          <label htmlFor="text"
                 className="form-label fw-bold mb-3">Tapez votre text</label>
          <textarea id="text" className="form-control"
                    onChange={handleChangeText}
                    value={text}>
          </textarea>
        </div>
    );
};

export default WidgetText;
