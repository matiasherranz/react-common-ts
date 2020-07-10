import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React$1 from 'react';
import classnames from '../../../node_modules/classnames/index.js';
import BaseButton from '../BaseButton/index.js';

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
    return (React$1.createElement(BaseButton, __assign({ className: classnames({
            'btn-icon': true,
            'btn-social-media': socialShare,
            block: fullWidth,
        }, className, socialShareType.className) }, otherProps),
        React$1.createElement("span", { className: socialShareType.iconClassName }),
        text || children));
};

export default IconButton;
//# sourceMappingURL=index.js.map
