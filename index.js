const express = require('express');
var Jimp = require("jimp");


const app = express();


app.get('/certs/marriage', async function (req, res) {
    var fileName = 'yes.png';
    var imageCaption = 'Official Marriage Certificate';
    var imageCaptiona = req.query.usera; var imageCaptionb = req.query.userb;
    if (!req.query.timestamp) {
        date = "Before MarriageBot was popular";
    } else {
        check = parseInt(req.query.timestamp*1000);
        if(Number.isInteger(check)) {
            date = new Date(parseInt(req.query.timestamp*1000));
            date = date.toString().split(" ");
            day = date[0];
            month = date[1];
            numdate = date[2];
            year = date[3];
            time = date.slice(4);
            time[1] = "UTC";
            timea = time[0] + " " + time[1];
        }
    }

    var imageCaptionc = date;
    var loadedImage;

    image = await Jimp.read(fileName);
    loadedImage = image;
    font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
    test = loadedImage.print(font, 290, 124, imageCaptiona);
    test = test.print(font, 204, 145, imageCaptionb);
    if(!req.query.timestamp) {
        test = test.print(font, 240, 236, date);
    } else {
        test = test.print(font, 266, 200, numdate);
        test = test.print(font, 348, 200, month);
        test = test.print(font, 266, 218, year);
        test = test.print(font, 240, 236, timea);
    }
    test = test.print(font, 364, 320, "MarriageBot");
    // 374, 296
    res.set('Content-Disposition', 'inline; filename="something.png"')
    res.type('jpg');
    test.getBufferAsync(Jimp.MIME_PNG).then(data => res.send(data)).catch(function (err) {
        console.error(err);
    });
});


app.get('/certs/adoption', function (req, res) {
    var fileName = 'yes.png';
    var imageCaption = 'Official Adoption Certificate';
    var imageCaptiona = "Parent: " + req.query.parenta;
    var imageCaptionc = "Child: " + req.query.child;
    var loadedImage;

    Jimp.read(fileName)
        .then(function (image) {
            loadedImage = image;
            return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
        })
        .then(function (font) {
            test = loadedImage.print(font, 250, 10, imageCaption);
            test = test.print(font, 150, 30, imageCaptiona);
            //test = test.print(font, 150, 50, imageCaptionb);
            test = test.print(font, 150, 70, imageCaptionc);
            res.set('Content-Disposition', 'inline; filename="something.jpg"')
            res.type('jpg');
            test.getBufferAsync(Jimp.MIME_PNG).then(data => res.send(data));
        })
        .catch(function (err) {
            console.error(err);
        });
});


app.listen(3000)
