import { __assign, __rest } from '../../../node_modules/tslib/tslib.es6.js';
import React$1 from 'react';
import Loading from '../Loading/index.js';
import { noop } from '../../lib/utils.js';

var AnchorButton = function (_a) {
    var to = _a.to, text = _a.text, children = _a.children, className = _a.className, props = __rest(_a, ["to", "text", "children", "className"]);
    return (React$1.createElement("a", __assign({ className: className, href: to }, props), text || children));
};
var HtmlButton = function (_a) {
    var onClick = _a.onClick, text = _a.text, children = _a.children, _b = _a.submit, submit = _b === void 0 ? false : _b, props = __rest(_a, ["onClick", "text", "children", "submit"]);
    return (React$1.createElement("button", __assign({ type: submit ? 'submit' : 'button' }, props, { onClick: function (e) {
            !submit && e.preventDefault();
            onClick && onClick(e);
        } }), text || children));
};
var BaseButton = function (props) {
    var to = props.to, _a = props.loading, loading = _a === void 0 ? false : _a, disabled = props.disabled, _b = props.onClick, onClick = _b === void 0 ? noop : _b;
    var handleClick = function (e) {
        return !loading && !disabled && onClick(e);
    };
    if (loading) {
        return (React$1.createElement(HtmlButton, __assign({}, props, { onClick: handleClick }),
            React$1.createElement(Loading, { loading: true, size: 24 })));
    }
    if (to) {
        return React$1.createElement(AnchorButton, __assign({}, props, { onClick: handleClick }));
    }
    return React$1.createElement(HtmlButton, __assign({}, props, { onClick: handleClick }));
};

export default BaseButton;
//# sourceMappingURL=index.js.map
