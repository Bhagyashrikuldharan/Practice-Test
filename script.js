var cargoNameEl = document.getElementById('cargoName').value;
var cargoGrossWeightEl = document.getElementById('cargoGrossWeight').value;
var cargoNetWeightEl = document.getElementById('cargoNetWeight').value;
var sourceSelectEl = document.getElementById('sourceSelect').value;
var destinationSelectEl = document.getElementById('destinationSelect').value;
var outputEl = document.getElementById('output');
const submitButtonEl = document.querySelector('submitButton');
submitButtonEl.addEventListener('click',function(event){
    if(cargoGrossWeightEl >= cargoNetWeightEl){
        
        if(sourceSelectEl != destinationSelectEl){
            console.log("Form submitted successfully!");
        }
        else{
            console.log("source and destination cannot be the same");
        }
    }
    else{
        console.log("gross weight cannot be less than net weight");
    }
});