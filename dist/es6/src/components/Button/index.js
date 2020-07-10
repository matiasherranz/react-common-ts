import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React$1 from 'react';
import classnames from '../../../node_modules/classnames/index.js';
import BaseButton from '../BaseButton/index.js';

var Button = function (_a) {
    var link = _a.link, secondary = _a.secondary, main = _a.main, big = _a.big, medium = _a.medium, small = _a.small, _b = _a.outline, outline = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.gray, gray = _d === void 0 ? false : _d, _e = _a.noPadding, noPadding = _e === void 0 ? false : _e, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, className = _a.className, props = __rest(_a, ["link", "secondary", "main", "big", "medium", "small", "outline", "disabled", "gray", "noPadding", "fullWidth", "className"]);
    var classNames = classnames({
        button: true,
        link: link,
        secondary: secondary,
        'btn-main': main,
        'btn-lg': big,
        'btn-md': medium,
        'btn-sm': small,
        'btn-outline': outline,
        'btn-disabled': disabled,
        'btn-gray': gray,
        'no-padding': noPadding,
        block: fullWidth,
    }, className);
    return React$1.createElement(BaseButton, __assign({}, props, { disabled: disabled, className: classNames }));
};

export default Button;
//# sourceMappingURL=index.js.map
