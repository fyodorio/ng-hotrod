---
to: app/<%=path%>/<%=name%>/<%=name%>.controller.js
---
'use strict';

class <%=h.changeCase.pascal(name)%>Controller {
	/* @ngInject */
	constructor() {
		this.name = '<%=name%>';
	}
}

export default <%=h.changeCase.pascal(name)%>Controller;
