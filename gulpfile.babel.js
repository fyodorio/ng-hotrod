import gulp from 'gulp';
import rename from 'gulp-rename';
import template from 'gulp-template';
import path from 'path';
import yargs from 'yargs';

let componentsPath = 'src/app/components';
let templatesPath = 'templates/*.**';

gulp.task('component', () => {
    
    const camelize = (name) => {
        if (typeof name != 'string') return name;
        let str = name;
        let matchResult = null;
        let findDashReg = /\-./;
        while (matchResult = str.match(findDashReg)) {
            str = str.replace(findDashReg, str.charAt(matchResult.index + 1).toUpperCase());
        }
        return str;
    }
    const pascalize = camelCaseName => camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    const name = yargs.argv.name + '';
    const camelCaseName = camelize(name);
    const PascalCaseName = pascalize(camelCaseName);
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join(componentsPath, parentPath, name);

    return gulp.src(templatesPath)
        .pipe(template({
            name: name,
            camelCaseName: camelCaseName,
            PascalCaseName: PascalCaseName
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
})