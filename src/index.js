import angular from 'angular';
import app from './app/app';

const component = () => {
	const element = document.createElement('div');

	element.innerHTML = `
    <div ng-app="appModule">
        <app></app>
    </div>
  `;

	return element;
};

document.body.appendChild(component());
