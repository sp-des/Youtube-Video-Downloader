const fs = require('fs');
const ytdl = require('ytdl-core');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter URL: ', (answerUrl) => {
    rl.question('Enter Filter (audioonly, mp4 etc): ', (answerFilter) => {
        rl.question('Enter File Name (include extension): ', (answerName) => {
            var splits1 = answerUrl.split(",")
            Url = splits1[0]
            var splits2 = answerFilter.split(",")
            Filter = splits2[0]
            var splits3 = answerName.split(",")
            Name = splits3[0]

        //const url = "https://www.youtube.com/watch?v=HJq3m-Ck2FI"
        ytdl(Url, { filter: Filter })
          .pipe(fs.createWriteStream(Name));

        // Example of filtering the formats to audio only.
        rl.close();
        })
    })
})
