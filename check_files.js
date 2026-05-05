const fs = require('fs');
const html = fs.readFileSync('index-classic.html', 'utf8');

console.log('Looking for 星级委员工作室风采 in index-classic.html:');
const idx = html.indexOf('星级委员工作室风采');
if (idx >= 0) {
    console.log('Found at index:', idx);
    console.log('Context:', html.substring(idx - 50, idx + 100));
} else {
    console.log('NOT FOUND');
}

// Check all file existence
const paths = [
    '2. 街道委员小组/14个街道_压缩.pdf',
    '6. 星级委员工作室风采/工作室.pdf',
    '5. 委员履职平台/0.履职平台简介202603.docx',
    '4. 市政协新时代协商民主实践 - 上城分中心/上城区实践分中心活动计划.docx',
    '4. 市政协新时代协商民主实践 - 上城分中心/2026杭州市政协新时代协商民主实践中心上城区分中心基本情况.docx'
];
console.log('\nFile existence:');
paths.forEach(p => console.log(p + ':', fs.existsSync(p)));