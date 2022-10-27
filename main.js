https://teachablemachine.withgoogle.com/models/LkYmYSzRp/

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    image_quality:100
});

camera = document.getElementById('camera');
Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    });
}
console.log('ml5.version', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LkYmYSzRp/model.json', modelloaded)

function modelloaded()
{
    console.log('model loaded');
}