const pinyin = require("chinese-to-pinyin");
const Hangul = require('hangul-js');
const path = require('path');
if(process.argv.slice(2).join(' ') == ''){
	console.error('용법: "' + path.basename(process.argv[1]) + ' <중국어 텍스트>"');
	return;
}
const replacedWords = pinyin(process.argv.slice(2).join(' '), {removeTone: true}).split(' ').map(word => {
let transformedWord = word
.replace('shang', 'ㅅㅑㅇ')
.replace('sheng', 'ㅅㅕㅇ')

.replace('yang', 'ㅇㅑㅇ')
.replace('iang', 'ㅑㅇ')
.replace('ying', 'ㅣㅇ')
.replace('wang', 'ㅇㅘㅇ')
.replace('uang', 'ㅘㅇ')
.replace('weng', 'ㅇㅝㅇ')
.replace('yuan', 'ㅇㅟㅇㅏㄴ')
.replace('yong', 'ㅇㅠㅇ')
.replace('iong', 'ㅠㅇ')

.replace('ang', 'ㅏㅇ')
.replace('eng', 'ㅓㅇ')
.replace('zhi', 'ㅈㅡ')
.replace('chi', 'ㅊㅡ')
.replace('shi', 'ㅅㅡ')
.replace('yai', 'ㅇㅑㅇㅣ')
.replace('yao', 'ㅇㅑㅇㅗ')
.replace('iao', 'ㅑㅇㅗ')
.replace('you', 'ㅇㅠ')
.replace('yan', 'ㅇㅖㄴ')
.replace('ian', 'ㅖㄴ')
.replace('yin', 'ㅇㅣㄴ')
.replace('ing', 'ㅣㅇ')
.replace('wai', 'ㅇㅘㅇㅣ')
.replace('uai', 'ㅘㅇㅣ')
.replace('wei', 'ㅇㅞㅇㅣ')
.replace('wan', 'ㅇㅘㄴ')
.replace('uan', 'ㅘㄴ')
.replace('wen', 'ㅇㅝㄴ')
.replace('ong', 'ㅜㅇ')
.replace('uan', 'ㅟㅇㅏㄴ')
.replace('yun', 'ㅇㅟㄴ')
.replace('yun', 'ㅇㅟㄴ')
.replace('yue', 'ㅇㅞ')

.replace('shu', 'ㅅㅠ')
.replace('sha', 'ㅅㅑ')
.replace('shu', 'ㅅㅠ')
.replace('she', 'ㅅㅕ')

.replace('yi', 'ㅣ')
.replace('wu', 'ㅜ')
.replace('yu', 'ㅟ')
.replace('ai', 'ㅏㅇㅣ')
.replace('ei', 'ㅔㅇㅣ')
.replace('ao', 'ㅏㅇㅗ')
.replace('ou', 'ㅓㅇㅜ')
.replace('an', 'ㅏㄴ')
.replace('en', 'ㅓㄴ')
.replace('er', 'ㅓㄹ')
.replace('ya', 'ㅇㅑ')
.replace('ia', 'ㅑ')
.replace('yo', 'ㅛ')
.replace('ye', 'ㅇㅖ')
.replace('ie', 'ㅖ')
.replace('zh', 'ㅈ')
.replace('ch', 'ㅊ')
.replace('sh', 'ㅅ')
.replace('ou', 'ㅠ')
.replace('iu', 'ㅠ')
.replace('in', 'ㅣㄴ')
.replace('wa', 'ㅇㅘ')
.replace('ua', 'ㅘ')
.replace('wo', 'ㅇㅝ')
.replace('uo', 'ㅝ')
.replace('ui', 'ㅜㅇㅣ')
.replace('un', 'ㅜㄴ')
.replace('ue', 'ㅞ')
.replace('ri', 'ㄹㅡ')
.replace('zi', 'ㅈㅡ')
.replace('ci', 'ㅊㅡ')
.replace('si', 'ㅆㅡ')

.replace('b', 'ㅂ')
.replace('p', 'ㅍ')
.replace('m', 'ㅁ')
.replace('f', 'ㅍ')
.replace('d', 'ㄷ')
.replace('t', 'ㅌ')
.replace('n', 'ㄴ')
.replace('l', 'ㄹ')
.replace('g', 'ㄱ')
.replace('k', 'ㅋ')
.replace('h', 'ㅎ')
.replace('a', 'ㅏ')
.replace('o', 'ㅗ')
.replace('e', 'ㅓ')
.replace('ê', 'ㅔ')
.replace('i', 'ㅣ')
.replace('u', 'ㅜ')
.replace('j', 'ㅈ')
.replace('q', 'ㅊ')
.replace('x', 'ㅅ')
.replace('r', 'ㄹ')
.replace('z', 'ㅉ')
.replace('c', 'ㅊ')
.replace('c', 'ㅊ')
.replace('s', 'ㅆ');
if(Hangul.isVowel(transformedWord.charAt(0))){ transformedWord = 'ㅇ' + transformedWord;}
return transformedWord;
});
console.log(Hangul.assemble(replacedWords.join(' ')).split('').map(word2 => {
if(Hangul.isVowel(word2)){ word2 = Hangul.assemble('ㅇ' + word2);}
return word2
}).join(''));
//console.debug(pinyin(process.argv.slice(2).join(' '), {removeTone: true}));
return;