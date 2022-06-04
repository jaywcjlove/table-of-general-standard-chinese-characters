import fs from 'fs';
import path from 'path';

const root = process.cwd();
const pathLog = (filename) => ` 👉 \x1b[34;1m${path.extname(filename).replace(/^\./, '').toLocaleUpperCase()}\x1b[0m\x1b[32;1m ${path.relative(root, filename)} \x1b[0m`;

;(async () => {
  const pyRawPath = path.resolve(root, 'data/pinyin.raw.txt');
  const pyRawJSONPath = path.resolve(root, 'data/pinyin.raw.json');
  const pyRawJSONMinPath = path.resolve(root, 'data/pinyin.raw.min.json');
  const pyRawJSONEffectPath = path.resolve(root, 'data/pinyin.raw.effect.json');
  const pyRawStr = (await fs.promises.readFile(pyRawPath)).toString();
  const pyRawObj = {};
  const pyRawEffect = [];
  // 汉字对应的拼音
  // { "二": "er" }
  const pinyinRawResult = {}

  pyRawStr.split('\n').forEach((str, idx) => {
    const data = str.trim().split(' ');
    const pinyin = data[0];
    const arr = [...data].filter(str => str.trim()).filter(Boolean);
    pyRawEffect.push([...data].filter(str => str.trim()).filter(Boolean));
    arr.splice(0,1);
    pyRawObj[pinyin] = arr;

    arr.forEach((han) => {
      if (!pinyinRawResult[han]) pinyinRawResult[han] = [];
      pinyinRawResult[han].push(pinyin);
    });
  });

  fs.promises.writeFile(pyRawJSONPath, JSON.stringify(pyRawObj, null, 2));
  console.log(`${pathLog(pyRawJSONPath)}`);

  fs.promises.writeFile(pyRawJSONMinPath, JSON.stringify(pyRawObj, null, 0));
  console.log(`${pathLog(pyRawJSONMinPath)}`);

  fs.promises.writeFile(pyRawJSONEffectPath, JSON.stringify(pyRawEffect, null, 2));
  console.log(`${pathLog(pyRawJSONEffectPath)}`);

  const charactersPath = path.resolve(root, 'data/characters.txt');
  const charactersJsonPath = path.resolve(root, 'data/characters.json');
  const charactersJsonMinPath = path.resolve(root, 'data/characters.min.json');
  const charactersStr = (await fs.promises.readFile(charactersPath)).toString();
  const charactersObj = [];
  const pinyinPath = path.resolve(root, 'data/pinyin.txt');
  const pinyinJsonPath = path.resolve(root, 'data/pinyin.json');
  const charactersPinyinCSVPath = path.resolve(root, 'data/characters.csv');
  const pinyinJsonMinPath = path.resolve(root, 'data/pinyin.min.json');
  const pinyinJsonDuoPath = path.resolve(root, 'data/pinyin.duo.json');
  const pinyinJsonDuoMinPath = path.resolve(root, 'data/pinyin.duo.min.json');
  let pinyinStr = '';
  let pinyinCSV = '汉字,拼音\n';
  const pinyinArr = [];
  // 多音字
  const pinyinDuoyinObj = {};

  charactersStr.split('\n').forEach((str) => {
    const han = str.trim();
    charactersObj.push(han);
    const py = pinyinRawResult[han];
    pinyinStr += `${py.join(' ')}\n`;
    pinyinCSV += `${han},${py.join('|')}\n`;
    pinyinArr.push(py.length === 1 ? py.join() : py);
    if (py.length > 1) {
      pinyinDuoyinObj[han] = py;
    }
  });
  fs.promises.writeFile(charactersJsonPath, JSON.stringify(charactersObj, null, 2));
  console.log(`${pathLog(charactersJsonPath)} 汉字: ${charactersObj.length}`);

  fs.promises.writeFile(charactersJsonMinPath, JSON.stringify(charactersObj, null, 0));
  console.log(`${pathLog(charactersJsonMinPath)} 汉字: ${charactersObj.length}`);

  fs.promises.writeFile(pinyinPath, pinyinStr.replace(/\n$/g, ''));
  console.log(`${pathLog(pinyinPath)} 拼音: ${pinyinArr.length}`);

  fs.promises.writeFile(pinyinJsonPath, JSON.stringify(pinyinArr, null, 2));
  console.log(`${pathLog(pinyinJsonPath)} 拼音: ${pinyinArr.length}`);

  fs.promises.writeFile(pinyinJsonMinPath, JSON.stringify(pinyinArr, null, 0));
  console.log(`${pathLog(pinyinJsonMinPath)} 拼音: ${pinyinArr.length}`);

  fs.promises.writeFile(pinyinJsonDuoPath, JSON.stringify(pinyinDuoyinObj, null, 2));
  console.log(`${pathLog(pinyinJsonDuoPath)} 多音字: ${Object.keys(pinyinDuoyinObj).length}`);
  
  fs.promises.writeFile(pinyinJsonDuoMinPath, JSON.stringify(pinyinDuoyinObj, null, 0));
  console.log(`${pathLog(pinyinJsonDuoMinPath)} 多音字: ${Object.keys(pinyinDuoyinObj).length}`);

  fs.promises.writeFile(charactersPinyinCSVPath, pinyinCSV);
  console.log(`${pathLog(charactersPinyinCSVPath)}`);

})();