var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithmOpts: { sort: false },
    algorithm: 'top-bottom',
  }));
  return spriteData.pipe(gulp.dest('images/dist'));
});