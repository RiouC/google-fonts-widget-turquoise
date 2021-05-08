import WidgetSelect from './WidgetSelect';
import WidgetText from './WidgetText';
import WidgetSize from './WidgetSize';

const FontsWidgets = (props) => {
    const { fontType, setFontType, text, setText, size, setSize, fontTypeMessages } = props;
    return (
        <aside className="col-lg-3 mb-4">
          <div style={{ position: "sticky", top: "0px" }}>

            <WidgetSelect
              fontType={fontType}
              setFontType={setFontType}
              fontTypeMessages={fontTypeMessages}
            />
            <WidgetText text={text} setText={setText} />
            <WidgetSize size={size} setSize={setSize} />

          </div>
        </aside >
    );
};

export default FontsWidgets;
