// eslint-disable-next-line no-unused-vars
import angular from 'angular';
// eslint-disable-next-line no-unused-vars
import app from './app/app';

const component = () => {
	// eslint-disable-next-line angular/document-service
	const element = document.createElement('div');

	element.innerHTML = `
    <div ng-app="appModule">
        <app></app>
    </div>
  `;

	return element;
};

angular.element(() => {
	angular.bootstrap(document, ['appModule']);
});

// eslint-disable-next-line angular/document-service
document.body.appendChild(component());
