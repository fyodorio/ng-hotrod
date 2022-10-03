---
to: app/<%=path%>/<%=name%>/<%=name%>.module.js
---
'use strict';

import <%=h.changeCase.pascal(name)%>Service from './<%=name%>.service';

const <%=h.changeCase.camel(name)%>Module = angular
	.module('<%=h.changeCase.camel(name)%>', [])

	.service('<%=h.changeCase.pascal(name)%>', <%=h.changeCase.pascal(name)%>Service).name;

export default <%=h.changeCase.camel(name)%>Module;
