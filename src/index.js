/**
 * This is a phantomjs program and NOT a nodejs
 *
 * @type {boilerplate}
 */
const webPage = require('webpage');
const fs = require('fs');
const system = require('system');

var page = webPage.create();
var file = system.args[1]
var shape2CodeDir = system.args[2]
var shapeDir = system.args[3]
var version = system.env["VERSION"] || "local-version";

function fileToPackage(file) {
    return file
        .replace(shapeDir, "")
        .replace(/\.shape$/g, "")
        .replace(/\//g, "_");
}

function shape2CodePath(file) {
    return shape2CodeDir + file;
}

var walk = function(dir) {
    var results = [];
    var list = fs.list(dir);
    list.forEach(function(file) {
        if(file !== "." && file !== ".."){
            filePath = dir + '/' + file;
            if (fs.isDirectory(filePath)) {
                results = results.concat(walk(filePath));
            } else {
                /* Is a file */
                results.push(fs.absolute(filePath));
            }
        }
    });
    return results;
}

function concatFiles(dirname) {
    var indexFile = dirname + "index.js";
    var jsonFile = dirname + "index.json";
    var content = "";
    var list = [];
    try {fs.remove(indexFile);} catch (exc) {}
    try {fs.remove(jsonFile);} catch (exc) {}

    walk(dirname).forEach(function (filename) {
        if (/\.(js)$/.test(filename)) {
            var relativePath = filename.replace(dirname, "")
            var basenamePath = relativePath.replace(".js", "")
            var name = basenamePath.replace(/\//g , "_")
            var basename = basenamePath.split('/').pop()
            var tags = name.split("_")
            list.push({
                name: name,
                tags: tags,
                version: version,
                basename: basename,
                basedir: relativePath.substring(0, relativePath.lastIndexOf('/')),
                filePath: basenamePath + ".shape",
                image: basenamePath + ".png"
            });
            content += (fs.read(filename, 'utf-8') + "\n\n\n")
        }
    });

    fs.write(jsonFile, JSON.stringify(list, undefined, 2), "w")
    fs.write(indexFile, content, "w")
}


function waitFor($config) {
    $config._start = $config._start || new Date();

    if ($config.timeout && new Date - $config._start > $config.timeout) {
        if ($config.error) $config.error();
        if ($config.debug) console.log('timedout ' + (new Date - $config._start) + 'ms');
        return;
    }

    if ($config.check()) {
        if ($config.debug) console.log('success ' + (new Date - $config._start) + 'ms');
        return $config.success();
    }

    setTimeout(waitFor, $config.interval || 0, $config);
}

page.onConsoleMessage = function (msg) {
    console.log('CONSOLE: ' + msg);
};

page.viewportSize = {width: 900, height: 900};

page.open('http://localhost:7400/designer', function (status) {

    console.log(status)
    if (status === "success") {
        console.log("Processing: " + file);
        var json = JSON.parse(fs.read(file));
        var pkg = fileToPackage(file);

        if (json.draw2d) {
            json = json.draw2d
        }
        json = JSON.stringify(json, undefined, 2)
        var code = fs.read(shape2CodePath("template.js"));
        fs.write(shape2CodePath("exporter.js"),
            "var json=" + json + ";\n" +
            "var pkg='" + pkg + "';\n" +
            code);
        waitFor({
            check: function () {
                return page.evaluate(function () {
                    console.log("check app...", app !== null)
                    return app !== null;
                });
            },
            success: function () {
                if (page.injectJs(shape2CodePath('exporter.js'))) {
                    waitFor({
                        check: function () {
                            return page.evaluate(function () {
                                console.log("check img...", img !== null)
                                return img !== null;
                            });
                        },
                        success: function () {
                            try {
                                var jsCode = page.evaluate(function () { return code });
                                var customCode = page.evaluate(function () { return customCode; });
                                var markdown = page.evaluate(function () { return markdown; });
                                var img = page.evaluate(function () { return img;});

                                var pngFilePath = file.replace(/\.shape$/, ".png");
                                var jsFilePath = file.replace(/\.shape$/, ".js");
                                var customFilePath = file.replace(/\.shape$/, ".custom");
                                var markdownFilePath = file.replace(/\.shape$/, ".md");

                                // replace the generated "testShape" with the real figure name
                                //
                                jsCode = jsCode.replace(/testShape/g, pkg);
                                jsCode = jsCode.replace(/\$\{VERSION\}/g, version);
                                customCode = customCode.replace(/testShape/g, pkg);

                                fs.write(jsFilePath, jsCode);
                                fs.write(customFilePath, customCode);
                                fs.write(markdownFilePath, markdown);
                                fs.write(pngFilePath, atob(img), "wb");

                                concatFiles(shapeDir);

                                phantom.exit(0);
                            } catch (exc) {
                                console.log(exc)
                            }
                        },
                        error: function () {
                            console.log("error found");
                        } // optional
                    });
                }
            }
        })
    }
});
