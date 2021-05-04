const WidgetText = () => {
    return (
        <div className="mb-3">
            <label htmlFor="text" className="form-label fw-bold mb-3">Tapez votre text</label>
            <textarea id="text" className="form-control">Portez ce vieux whisky au juge blond qui fume !? 0123456789</textarea>
        </div>
    )
}

export default WidgetText;