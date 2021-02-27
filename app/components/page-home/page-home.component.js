import controller from './page-home.controller';
import './page-home.scss';

const pageHomeComponent = {
	bindings: {},
	template: `
		<md-content class="page-home">
			<h2 class="md-display-1">Modern starter for AngularJS + Angular Material</h2>
			<img 
				class="hero-img" 
				src="https://res.cloudinary.com/fyodorio/image/upload/v1611994660/my-logos/hotrod-logo_rhkfxy.jpg" 
				alt="ng-hotrod">
			<h3 class="md-title">FEATURING:</h3>
			<div layout="column" layout-align="center center">
				<ul class="md-headline" layout="column" layout-align="start start">
					<li><a href="https://angularjs.org/">AngularJS</a> (1.8.2)</li>
					<li><a href="https://material.angularjs.org/latest/">Angular Material</a></li>
					<li><a href="https://sass-lang.com/">Sass</a></li>
					<li><a href="https://vitejs.dev/">Vite</a></li>
					<li><a href="https://eslint.org/">ESLint</a></li>
					<li><a href="https://prettier.io/">Prettier</a></li>
					<li><a href="https://www.hygen.io/">hygen</a></li>
					<li><a href="https://github.com/typicode/husky">husky</a></li>
				</ul>
			</div>
		</md-content>
	`,
	controller,
};

export default pageHomeComponent;
