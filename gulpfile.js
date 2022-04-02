"use strict";
/*
src 参照元を指定
dest 出力先を指定
series(直列処理)とparallel(並列処理)
*/
const { src, dest, watch, series, parallel } = require("gulp");
const sassGlob = require("gulp-sass-glob-use-forward");
const sass = require("gulp-sass")(require("sass"));
const header = require("gulp-header");
const replace = require("gulp-replace");
const loadPlugins = require("gulp-load-plugins");
const $ = loadPlugins();
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const cssDeclarationSorter = require("css-declaration-sorter");
const pleeease = require("gulp-pleeease");
// const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
// const rename = require("gulp-rename");
const browserSync = require("browser-sync");
const server = browserSync.create();

// pathをここであらかじめ変数化 /////////////////////////////////////////////////////
const srcPath = {
    css: "./sass/**/*.scss",
    img: "./image-original/*.{png,jpg,jpeg,gif,svg}",
    // php: "./**/*.php",//このパスで動くかどうか？？？ ただこれなくても正常に動いた
};
const destPath = {
    css: "./assets/css",
    img: "./assets/images",
};
// pathをここであらかじめ変数化 ここまで /////////////////////////////////////////////////////

// sassのコンパイルタスク //////////////////////////////////////////////////////////////////
const compSass = () => {
    return (
        src([srcPath.css, "!./sass/**/_*.scss"])
            .pipe(sassGlob())
            .pipe(plumber())
            .pipe($.sourcemaps.init())
            .pipe(
                sass({
                    outputStyle: "expanded",
                }).on("error", sass.logError)
            )
            .pipe(
                $.postcss([
                    cssDeclarationSorter({
                        order: "smacss",
                    }),
                ])
            )
            .pipe(
                pleeease({
                    autoprefixer: {
                        // ベンダープレフィックスの自動付与
                        browsers: ["> 2% in JP", "not ie 11", "Firefox ESR"],
                    },
                    mqpacker: true, // メディアクエリをまとめる
                    minifier: false, // 納品時にtrueに変更
                })
            )
            // .pipe(// 納品時にON
            //     rename({
            //         suffix: ".min",
            //     })
            // )
            .pipe(replace(/@charset "UTF-8";/g, ""))
            .pipe(header('@charset "UTF-8";\n\n'))
            .pipe($.sourcemaps.write("."))
            .pipe(dest(destPath.css))
    );
};
// sassのコンパイルタスク ここまで //////////////////////////////////////////////////////////////////



const optimizeImages = () => {
    return src("./image-original/*.{png,jpg,jpeg,gif,svg}")
        .pipe($.changed(destPath.img))
        .pipe(
            imagemin([
                mozjpeg({ quality: 70 }),
                imagemin.svgo(), //imagemin.という書き方が付属のを使ってるということ
                imagemin.optipng(),
                imagemin.gifsicle({ optimizationLevel: 3 }),
                pngquant({
                    quality: [0.65, 0.8],
                    speed: 1,
                }),
            ])
        )
        .pipe(dest(destPath.img));
};

const browserSyncFunc = () => {
    // server.init(browserSyncWp);//Wordpress開発時にON
    server.init({
        server: {
            baseDir: "./",
        },
        startPath: "./index.html", // ここでhtmlのwatch場所を変更する
        files: "./**",
        open: "external", //localでサーバーを立ち上げてくれる
        notify: false,
    });

    watch(srcPath.css, compSass);
    // watch(srcPath.js, javascript);
    watch(srcPath.img, optimizeImages);
    watch("./**").on("change", server.reload); //projectフォルダの中身全部を対象に変更のあった場合にreloadする
};
// browser-syncのオプション : Wordpress開発時にON
const browserSyncWp = {
    // Localで動かすWPのサイトドメインに書き換える
    proxy: "http://xxx.wp/", //.localはコンパイルスピードが遅いらしい。wpとかに変えろ
    open: "true",
    watchOptions: {
        debounceDelay: 1000, //1秒間、タスクの再実行を抑制
    },
    reloadOnRestart: true,
};

const build = parallel(optimizeImages, compSass); //javascriptを削除中
const serve = series(build, browserSyncFunc); //上記を順番どおり実行するための変数

//実際に実行する流れ
exports.build = build; //buildの中に実行するものを格納している
exports.serve = serve;
exports.default = serve; //defaultをserveに全部格納している状態
