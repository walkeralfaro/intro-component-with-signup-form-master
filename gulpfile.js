const { src, dest, watch } = require('gulp');  // API de gulp que permite traer funciones
const sass = require('gulp-sass')(require('sass'));


// COMPILAR CSS CON GULP ************************************************
function css( done ) {

    src('src/scss/**/*.scss')       // Identificar el archivo SASS
        .pipe( sass() )             // Compila SASS
        .pipe( dest('build/css') ); // Guarsa el archivo compilado en CSS

    done(); // Callback que avisa a gulp cuando llegamos al final
}

// WATCHER DE CSS ********************************************************
function dev( done ) {

    watch('src/scss/**/*.scss', css)

    done();
}

exports.dev = dev;