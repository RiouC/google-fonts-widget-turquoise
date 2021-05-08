const WidgetText = (props) => {
    const { text, setText } = props;
    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    return (
        <div className="mb-3">
          <label htmlFor="text"
                 className="form-label fw-bold mb-3">
            Tapez votre texte
          </label>
          <textarea id="text" className="form-control"
                    onChange={handleChangeText}
                    value={text}
                    aria-label="Tapez le texte d'exemple à utiliser pour visualisez les polices">
          </textarea>
        </div>
    );
};

export default WidgetText;
