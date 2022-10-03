---
to: app/<%=path%>/<%=name%>/<%=name%>.service.js
---
class <%=h.changeCase.pascal(name)%>Service {
	/* @ngInject */
	constructor() {
		this.name = '<%=name%>';
	}
}

export default <%=h.changeCase.pascal(name)%>Service;
