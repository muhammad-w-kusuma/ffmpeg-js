const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const filePath = process.argv.slice(2)[0];
const text = process.argv.slice(2)[1];

ffmpeg(filePath)
    .videoFilters({
        filter: 'drawtext',
        options: {
            text,
            fontfile: '/System/Library/Fonts/Supplemental/Arial.ttf',
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 550,
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
    })
    .save('output.mp4')
