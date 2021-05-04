import WidgetSelect from './WidgetSelect';
import WidgetText from './WidgetText';
import WidgetSize from './WidgetSize';

const FontsWidgets = () => {
    return (
        <div className="col-lg-3 mb-4">
            <div style={{ position: "sticky", top: "0px" }}>

                <WidgetSelect />

                <WidgetText />

                <WidgetSize />

            </div>
        </div >
    );
};

export default FontsWidgets;