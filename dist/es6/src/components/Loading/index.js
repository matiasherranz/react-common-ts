import { __makeTemplateObject } from '../../../node_modules/tslib/tslib.es6.js';
import React$1 from 'react';
import styled$1 from 'styled-components';
import loadingImage from './loading.svg.js';
import pinkLoadingImage from './rolling.svg.js';

/**
 * This component is designed and meant to be used in non-fullscreen contexts,
 * like buttons and such.
 * For fullscreen loading, take a look at the `FullScreenLoading` component.
 */
var StyledDiv = styled$1.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  text-align: center;\n  display: table;\n"], ["\n  width: 100%;\n  text-align: center;\n  display: table;\n"])));
var StyledImage = styled$1.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: middle;\n  display: inline-block;\n  ", "\n"], ["\n  vertical-align: middle;\n  display: inline-block;\n  ", "\n"])), function (_a) {
    var width = _a.width;
    return "width: " + width + "px;";
});
var Loading = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, children = _a.children, _c = _a.size, size = _c === void 0 ? 50 : _c, _d = _a.pink, pink = _d === void 0 ? false : _d;
    if (!loading) {
        if (children) {
            return React$1.createElement("div", null, children);
        }
        return null;
    }
    return (React$1.createElement(StyledDiv, null,
        React$1.createElement(StyledImage, { width: size, src: pink ? pinkLoadingImage : loadingImage, alt: "loading" })));
};
var templateObject_1, templateObject_2;

export default Loading;
//# sourceMappingURL=index.js.map
