var md = require("markdown").markdown;
var fs = require("fs");

var source = process.argv[2];
var title = process.argv[3];
fs.readFile('C:/Users/songzhj/Github/songzhj.github.io/source_md/' + source + '.md', 'utf-8', function(err, data) {
	if (err) throw err;
	var article = md.toHTML(data);

	var head = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" name="viewport" content="width=device-width" /><title>songzhj</title><link rel="stylesheet" href="../css/note.css"></head><body><article class="body">';
	var foot = '</article><script type="text/javascript" src="../js/init.js"></script></body></html>';
	var page = head + article + foot;

	fs.writeFile('C:/Users/songzhj/Github/songzhj.github.io/pages/' + title + '.html', page, function(err) {
		if(err) throw err;
		console.log('##finished##');
	});
});