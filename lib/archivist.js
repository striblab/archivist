


const fetch = require('node-fetch');
const source = require('vinyl-source-stream');
const vfs = require('vinyl-fs');
const awspublish = require('gulp-awspublish');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');


(async () => {
  var publisher = awspublish.create({
    params: {
      Bucket: 'stribtest-bucket'
    }
  }, {
    cacheFileName: '.cache'
  });

  let a = await fetch('http://github.com');
  a.body
    .pipe(source('github.com'))
    .pipe(vfs.dest('./'))
    //.pipe(buffer())
    .pipe(rename((path) => {
      path.extname = '.change';
    }))
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

})();
