"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function(done) {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist:  ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());

    done();
});

gulp.task("serve", function(done) {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", gulp.series("style"));
  gulp.watch("*.html").on("change", () => {
    server.reload();
    done();
  });

  done();
});
