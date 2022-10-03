---
to: app/<%=path%>/<%=name%>/<%=name%>.component.js
---
'use strict';

import template from './<%=name%>.html?raw';
import controller from './<%=name%>.controller';
import './<%=name%>.scss';

const <%=h.changeCase.camel(name)%>Component = {
	bindings: {},
	template,
	controller,
};

export default <%=h.changeCase.camel(name)%>Component;
