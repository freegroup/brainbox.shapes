const puppeteer = require('puppeteer');
const path = require("path")
const fs = require("fs")
const glob = require("glob")
const thisDir = path.normalize(__dirname)
const version =  process.env.VERSION || "local-version";
const args = process.argv.slice(2);

const shapeFile = args[0]
const shapeAppDir = args[1]

function fileToPackage(file) {
  return file
    .replace(shapeAppDir, "")
    .replace(/\.shape$/g, "")
    .replace(/\//g, "_");
}

function concatFiles(dirname) {
  let indexFile = dirname + "index.js";
  let jsonFile = dirname + "index.json";
  try {fs.unlinkSync(indexFile);} catch (exc) {}
  try {fs.unlinkSync(jsonFile);} catch (exc) {}

  glob(dirname+"/**/*.js",  (er, files) => {
    let content = "";
    let list = [];
    files.forEach( (filename)=>  {
      let relativePath = filename.replace(dirname, "")
      let basenamePath = relativePath.replace(".js", "")
      let name = basenamePath.replace(/\//g , "_")
      let basename = relativePath.split('/').pop()
      let tags = name.split("_")
      list.push({
        name: name,
        tags: tags,
        version: version,
        basename: basename,
        basedir: relativePath.substring(0, relativePath.lastIndexOf('/')),
        filePath: basenamePath + ".shape",
        image: basenamePath + ".png"
      });
      content += (fs.readFileSync(filename, 'utf8') + "\n\n\n")
    });


    fs.writeFileSync(jsonFile, JSON.stringify(list, undefined, 2))
    fs.writeFileSync(indexFile, content)
  })
}

module.exports = {

  thumbnail: async (file, dir) => {
    try {
      let json = JSON.parse(fs.readFileSync(file,'utf8'));
      let pkg = fileToPackage(file);

      if(json.draw2d) {
        json = json.draw2d
      }
      json = JSON.stringify(json, undefined, 2)

      let code = fs.readFileSync(thisDir + "/template.js", 'utf8');
      let injectedCode =
        "let json=" + json + ";\n" +
        "let pkg='" + pkg + "';\n" +
        code;
        
      const browser = await puppeteer.launch()
      
      const page = await browser.newPage()
      page.on('console', msg => {
        for (let i = 0; i < msg._args.length; ++i)
          console.log(`${i}: ${msg._args[i]}`);
      });
      await page.goto('http://localhost:7400/designer')
      await page.setViewport({width: 900, height: 1024})
      await page.waitForFunction(() => 'app' in window)
      await page.mainFrame().evaluate(injectedCode)
      await page.waitForFunction(() => img !== null)

      let jsCode = await page.evaluate(() => { return code });
      let customCode =await page.evaluate(() => { return customCode; });
      let markdown = await page.evaluate(() => { return markdown; });
      let img = await page.evaluate(() => { return img;});

      let pngFilePath = file.replace(/\.shape$/, ".png");
      let jsFilePath = file.replace(/\.shape$/, ".js");
      let customFilePath = file.replace(/\.shape$/, ".custom");
      let markdownFilePath = file.replace(/\.shape$/, ".md");

      // replace the generated "testShape" with the real figure name
      //
      jsCode = jsCode.replace(/testShape/g, pkg);
      jsCode = jsCode.replace(/\$\{VERSION\}/g, version);
      customCode = customCode.replace(/testShape/g, pkg);

      fs.writeFileSync(jsFilePath, jsCode, 'utf8');
      fs.writeFileSync(customFilePath, customCode, 'utf8');
      fs.writeFileSync(markdownFilePath, markdown, 'utf8');
      fs.writeFileSync(pngFilePath, new Buffer(img, 'base64'), 'binary');

      browser.close()

      concatFiles(shapeAppDir)
    }
    catch(e){
      console.log(e)
    }
  }
}

console.log("----",shapeFile)
module.exports.thumbnail(shapeFile)