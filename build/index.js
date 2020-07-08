'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var loadingImage = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%5Ci134px%5Ci%20height%3D%5Ci134px%5Ci%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%22%20class%3D%22uil-ring%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22none%22%20class%3D%22bk%22%3E%3C%2Frect%3E%3Cdefs%3E%3Cfilter%20id%3D%22uil-ring-shadow%22%20x%3D%22-100%25%22%20y%3D%22-100%25%22%20width%3D%22300%25%22%20height%3D%22300%25%22%3E%3CfeOffset%20result%3D%22offOut%22%20in%3D%22SourceGraphic%22%20dx%3D%220%22%20dy%3D%220%22%3E%3C%2FfeOffset%3E%3CfeGaussianBlur%20result%3D%22blurOut%22%20in%3D%22offOut%22%20stdDeviation%3D%220%22%3E%3C%2FfeGaussianBlur%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22blurOut%22%20mode%3D%22normal%22%3E%3C%2FfeBlend%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M10%2C50c0%2C0%2C0%2C0.5%2C0.1%2C1.4c0%2C0.5%2C0.1%2C1%2C0.2%2C1.7c0%2C0.3%2C0.1%2C0.7%2C0.1%2C1.1c0.1%2C0.4%2C0.1%2C0.8%2C0.2%2C1.2c0.2%2C0.8%2C0.3%2C1.8%2C0.5%2C2.8%20c0.3%2C1%2C0.6%2C2.1%2C0.9%2C3.2c0.3%2C1.1%2C0.9%2C2.3%2C1.4%2C3.5c0.5%2C1.2%2C1.2%2C2.4%2C1.8%2C3.7c0.3%2C0.6%2C0.8%2C1.2%2C1.2%2C1.9c0.4%2C0.6%2C0.8%2C1.3%2C1.3%2C1.9%20c1%2C1.2%2C1.9%2C2.6%2C3.1%2C3.7c2.2%2C2.5%2C5%2C4.7%2C7.9%2C6.7c3%2C2%2C6.5%2C3.4%2C10.1%2C4.6c3.6%2C1.1%2C7.5%2C1.5%2C11.2%2C1.6c4-0.1%2C7.7-0.6%2C11.3-1.6%20c3.6-1.2%2C7-2.6%2C10-4.6c3-2%2C5.8-4.2%2C7.9-6.7c1.2-1.2%2C2.1-2.5%2C3.1-3.7c0.5-0.6%2C0.9-1.3%2C1.3-1.9c0.4-0.6%2C0.8-1.3%2C1.2-1.9%20c0.6-1.3%2C1.3-2.5%2C1.8-3.7c0.5-1.2%2C1-2.4%2C1.4-3.5c0.3-1.1%2C0.6-2.2%2C0.9-3.2c0.2-1%2C0.4-1.9%2C0.5-2.8c0.1-0.4%2C0.1-0.8%2C0.2-1.2%20c0-0.4%2C0.1-0.7%2C0.1-1.1c0.1-0.7%2C0.1-1.2%2C0.2-1.7C90%2C50.5%2C90%2C50%2C90%2C50s0%2C0.5%2C0%2C1.4c0%2C0.5%2C0%2C1%2C0%2C1.7c0%2C0.3%2C0%2C0.7%2C0%2C1.1%20c0%2C0.4-0.1%2C0.8-0.1%2C1.2c-0.1%2C0.9-0.2%2C1.8-0.4%2C2.8c-0.2%2C1-0.5%2C2.1-0.7%2C3.3c-0.3%2C1.2-0.8%2C2.4-1.2%2C3.7c-0.2%2C0.7-0.5%2C1.3-0.8%2C1.9%20c-0.3%2C0.7-0.6%2C1.3-0.9%2C2c-0.3%2C0.7-0.7%2C1.3-1.1%2C2c-0.4%2C0.7-0.7%2C1.4-1.2%2C2c-1%2C1.3-1.9%2C2.7-3.1%2C4c-2.2%2C2.7-5%2C5-8.1%2C7.1%20c-0.8%2C0.5-1.6%2C1-2.4%2C1.5c-0.8%2C0.5-1.7%2C0.9-2.6%2C1.3L66%2C87.7l-1.4%2C0.5c-0.9%2C0.3-1.8%2C0.7-2.8%2C1c-3.8%2C1.1-7.9%2C1.7-11.8%2C1.8L47%2C90.8%20c-1%2C0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1%2C90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34%2C87.7l-1.3-0.6%20c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2%20c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3%20c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4%2C0-0.7%2C0-1.1c0-0.7%2C0-1.2%2C0-1.7C10%2C50.5%2C10%2C50%2C10%2C50z%22%20fill%3D%22%23fff%22%20filter%3D%22url%28%23uil-ring-shadow%29%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20from%3D%220%2050%2050%22%20to%3D%22360%2050%2050%22%20repeatCount%3D%22indefinite%22%20dur%3D%221s%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

var pinkLoadingImage = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%5Ci110px%5Ci%20height%3D%5Ci110px%5Ci%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%22%20class%3D%22uil-ring%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22none%22%20class%3D%22bk%22%3E%3C%2Frect%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20stroke-dasharray%3D%22163.36281798666926%2087.9645943005142%22%20stroke%3D%22%23e72d9e%22%20fill%3D%22none%22%20stroke-width%3D%2220%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20values%3D%220%2050%2050%3B180%2050%2050%3B360%2050%2050%3B%22%20keyTimes%3D%220%3B0.5%3B1%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20begin%3D%220s%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E";

/**
 * This component is designed and meant to be used in non-fullscreen contexts,
 * like buttons and such.
 * For fullscreen loading, take a look at the `FullScreenLoading` component.
 */
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  text-align: center;\n  display: table;\n"], ["\n  width: 100%;\n  text-align: center;\n  display: table;\n"])));
var StyledImage = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: middle;\n  display: inline-block;\n  ", "\n"], ["\n  vertical-align: middle;\n  display: inline-block;\n  ", "\n"])), function (_a) {
    var width = _a.width;
    return "width: " + width + "px;";
});
var Loading = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, children = _a.children, _c = _a.size, size = _c === void 0 ? 50 : _c, _d = _a.pink, pink = _d === void 0 ? false : _d;
    if (!loading) {
        if (children) {
            return React.createElement("div", null, children);
        }
        return null;
    }
    return (React.createElement(StyledDiv, null,
        React.createElement(StyledImage, { width: size, src: pink ? pinkLoadingImage : loadingImage, alt: "loading" })));
};
var templateObject_1, templateObject_2;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function () { };

var AnchorButton = function (_a) {
    var to = _a.to, text = _a.text, children = _a.children, className = _a.className, props = __rest(_a, ["to", "text", "children", "className"]);
    return (React.createElement("a", __assign({ className: className, href: to }, props), text || children));
};
var HtmlButton = function (_a) {
    var onClick = _a.onClick, text = _a.text, children = _a.children, _b = _a.submit, submit = _b === void 0 ? false : _b, props = __rest(_a, ["onClick", "text", "children", "submit"]);
    return (React.createElement("button", __assign({ type: submit ? 'submit' : 'button' }, props, { onClick: function (e) {
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
        return (React.createElement(HtmlButton, __assign({}, props, { onClick: handleClick }),
            React.createElement(Loading, { loading: true, size: 24 })));
    }
    if (to) {
        return React.createElement(AnchorButton, __assign({}, props, { onClick: handleClick }));
    }
    return React.createElement(HtmlButton, __assign({}, props, { onClick: handleClick }));
};

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
    return React.createElement(BaseButton, __assign({}, props, { disabled: disabled, className: classNames }));
};

var SocialShare;
(function (SocialShare) {
    SocialShare[SocialShare["email"] = 0] = "email";
    SocialShare[SocialShare["facebook"] = 1] = "facebook";
    SocialShare[SocialShare["messenger"] = 2] = "messenger";
    SocialShare[SocialShare["sms"] = 3] = "sms";
    SocialShare[SocialShare["twitter"] = 4] = "twitter";
})(SocialShare || (SocialShare = {}));
var socialShareTypes = {
    email: {
        className: '',
        iconClassName: 'ipsy-icon icon-ipsy-email',
    },
    facebook: {
        className: 'btn-facebook',
        iconClassName: 'ipsy-icon icon-ipsy-facebook',
    },
    messenger: {
        className: 'btn-facebook-messenger',
        iconClassName: 'ipsy-icon icon-ipsy-fb-messenger',
    },
    sms: {
        className: 'btn-invite-sms',
        iconClassName: 'ipsy-icon icon-ipsy-sms',
    },
    twitter: {
        className: 'btn-twitter',
        iconClassName: 'ipsy-icon icon-ipsy-twitter',
    },
};
var getSocialShareType = function (type) {
    if (!type)
        return {};
    var result = socialShareTypes[type];
    return result || {};
};
var IconButton = function (_a) {
    var text = _a.text, socialShare = _a.socialShare, className = _a.className, fullWidth = _a.fullWidth, children = _a.children, otherProps = __rest(_a, ["text", "socialShare", "className", "fullWidth", "children"]);
    var socialShareType = getSocialShareType(socialShare);
    return (React.createElement(BaseButton, __assign({ className: classnames({
            'btn-icon': true,
            'btn-social-media': socialShare,
            block: fullWidth,
        }, className, socialShareType.className) }, otherProps),
        React.createElement("span", { className: socialShareType.iconClassName }),
        text || children));
};

exports.Button = Button;
exports.IconButton = IconButton;
exports.Loading = Loading;
//# sourceMappingURL=index.js.map
