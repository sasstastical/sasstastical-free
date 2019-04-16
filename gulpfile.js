import { parallel, series, task, watch, src, dest, registry, tree } from 'gulp'

import sass from 'gulp-sass'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

task('styles', () => {
  src('./src/sasstasical-free.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({indentedSyntax: true, outputStyle: 'expanded'}))
    .pipe(dest('dist/css'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
})


task('default', series(['styles']), () => {})
