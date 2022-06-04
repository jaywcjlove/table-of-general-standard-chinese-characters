const characters = require('../data/characters.json');
const pinyinDuo = require('../data/pinyin.duo.json');
const pinyin = require('../data/pinyin.json');
const pinyinRaw = require('../data/pinyin.raw.json');
const pinyinRawEffect = require('../data/pinyin.raw.effect.json');

const charactersJS = require('../dist/characters');
const pinyinDuoJS = require('../dist/pinyin.duo');
const pinyinJS = require('../dist/pinyin');
const pinyinRawJS = require('../dist/pinyin.raw');
const togscc = require('../');


test('汉字转拼音 test case', () => {
  expect(Object.keys(togscc).length).toBe(8105);
  expect(togscc['了']).toEqual([ "le", "liǎo" ]);
  expect(togscc['正']).toEqual([ "zhēng", "zhèng" ]);
  expect(togscc['啜']).toEqual([ "chuài", "chuò" ]);

  expect("你好世界！".split('').map((han) => togscc[han] ? togscc[han] : han)).toEqual(["nǐ", ["hǎo","hào"], "shì", "jiè", "！"]);

});

test('汉字字序 test case', () => {
  expect(charactersJS.length).toBe(8105);
  expect(charactersJS.indexOf('一') + 1).toBe(1);
  expect(charactersJS.indexOf('幻') + 1).toBe(189);
  expect(charactersJS.indexOf('柰') + 1).toBe(4139);
  expect(charactersJS.indexOf('𫘝') + 1).toBe(6643);
  expect(charactersJS.indexOf('蠼') + 1).toBe(8105);

  expect(characters.length).toBe(8105);
  expect(characters.indexOf('一') + 1).toBe(1);
  expect(characters.indexOf('幻') + 1).toBe(189);
  expect(characters.indexOf('柰') + 1).toBe(4139);
  expect(characters.indexOf('𫘝') + 1).toBe(6643);
  expect(characters.indexOf('蠼') + 1).toBe(8105);
});

test('多音汉字 test case', () => {
  expect(Object.keys(pinyinDuoJS).length).toBe(597);
  expect(pinyinDuoJS['了']).toEqual([ "le", "liǎo" ]);
  expect(pinyinDuoJS['正']).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyinDuoJS['啜']).toEqual([ "chuài", "chuò" ]);

  expect(Object.keys(pinyinDuo).length).toBe(597);
  expect(pinyinDuo['了']).toEqual([ "le", "liǎo" ]);
  expect(pinyinDuo['正']).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyinDuo['啜']).toEqual([ "chuài", "chuò" ]);
});

test('拼音 test case', () => {
  expect(pinyinJS.length).toBe(8105);
  expect(pinyinJS[characters.indexOf('一')]).toBe('yī');
  expect(pinyinJS[characters.indexOf('幻')]).toBe('huàn');
  expect(pinyinJS[characters.indexOf('了')]).toEqual([ "le", "liǎo" ]);
  expect(pinyinJS[characters.indexOf('正')]).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyinJS[characters.indexOf('啜')]).toEqual([ "chuài", "chuò" ]);
  
  expect(pinyin.length).toBe(8105);
  expect(pinyin[characters.indexOf('一')]).toBe('yī');
  expect(pinyin[characters.indexOf('幻')]).toBe('huàn');
  expect(pinyin[characters.indexOf('了')]).toEqual([ "le", "liǎo" ]);
  expect(pinyin[characters.indexOf('正')]).toEqual([ "zhēng", "zhèng" ]);
  expect(pinyin[characters.indexOf('啜')]).toEqual([ "chuài", "chuò" ]);
});

test('拼音对应汉字 test case', () => {
  expect(Object.keys(pinyinRawJS).length).toBe(1296);
  expect(pinyinRawJS['ái']).toEqual([ "挨", "皑", "癌" ]);
  expect(pinyinRawJS['báo']).toEqual([ "雹", "薄" ]);
  expect(pinyinRawJS['běng']).toEqual([ "绷", "琫" ]);
  expect(pinyinRawJS['wáng']).toEqual([ "亡", "王" ]);
  
  expect(Object.keys(pinyinRaw).length).toBe(1296);
  expect(pinyinRaw['ái']).toEqual([ "挨", "皑", "癌" ]);
  expect(pinyinRaw['báo']).toEqual([ "雹", "薄" ]);
  expect(pinyinRaw['běng']).toEqual([ "绷", "琫" ]);
  expect(pinyinRaw['wáng']).toEqual([ "亡", "王" ]);
});

test('拼音与文字在一行数组中 test case', () => {
  expect(pinyinRawEffect.length).toBe(1296);
  expect(pinyinRawEffect[1]).toEqual([ "á", "啊" ]);
});