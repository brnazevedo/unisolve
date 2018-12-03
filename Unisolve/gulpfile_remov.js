gulp.task('serve:test', ['scripts'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      ui: false,
      server: {
        baseDir: 'test',
        routes: {
          '/scripts': '.tmp/scripts',
          '/bower_components': 'bower_components'
        }
      }
    });
  
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
    gulp.watch('test/spec/**/*.js', ['lint:test']);
  });
  

  

  gulp.task('lint:test', () => {
    return lint('test/spec/**/*.js')
      .pipe(gulp.dest('test/spec'));
  });
  