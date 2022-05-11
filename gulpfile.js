const { src, dest, watch } = require('gulp');  // API de gulp que permite traer funciones

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require ('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// JS
const terser = require('gulp-terser-js');


// COMPILAR CSS CON GULP ************************************************
function css( done ) {

    src('src/scss/**/*.scss')       // Identificar el archivo SASS
        .pipe( sourcemaps.init() )
        .pipe( plumber() )
        .pipe( sass() )             // Compila SASS
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( dest('build/css') ); // Guarsa el archivo compilado en CSS

    done(); // Callback que avisa a gulp cuando llegamos al final
}

// JAVASCRIPT
function javascript( done ) {
    src( 'src/js/**/*.js' )
        .pipe( sourcemaps.init() )
        .pipe( terser() )
        .pipe( sourcemaps.write('.') )
        .pipe( dest('build/js') );

    done();
}

// WATCHER DE CSS Y JS ********************************************************
function dev( done ) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    done();
}

exports.javascript = javascript;
exports.css = css;
exports.dev = dev;