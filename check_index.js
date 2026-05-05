const fs = require('fs');
const html = fs.readFileSync('index-classic.html', 'utf8');
const srcMatches = html.match(/src="[^"]+"/g) || [];
console.log('Images in index-classic.html:');
srcMatches.forEach(m => console.log(m));

// Check if files exist
const paths = [
    '2. 街道委员小组/14个街道.jpg',
    '5. 委员履职平台/0.履职平台简介202603.docx',
    '6. 星级委员工作室风采/工作室.pdf',
    '4. 市政协新时代协商民主实践 - 上城分中心/上城区实践分中心活动计划.docx'
];
console.log('\nFile existence check:');
paths.forEach(p => console.log(p + ': ' + fs.existsSync(p)));