const fs = require('fs');
const spawn = require('child_process').spawn;

process.argv.slice(2).forEach(function(file) {
    fs.watch(file, function(e) {
        if (e === 'change') {
            spawn('lessc', ['main.less', 'static/css/main.css']);
        }
    });
});
