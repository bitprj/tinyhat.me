let spinner = document.getElementById("spinner");
let exampleImage = document.getElementById("exampleImage");

let fileInput = document.getElementById("file-upload");
let numberInput = document.getElementById("numberHats");
let typeInput = document.getElementById("typeInput");

function getImage(event) {
    event.preventDefault();

    let method = "GET";
    let options = {}
    // show spinner and hide the person
    spinner.classList.remove("hidden");
    exampleImage.classList.add('hidden');

    let baseUrl = "http://afebcb99496764eaeac38b3f3ee17545-643504213.us-east-2.elb.amazonaws.com/";

    if (typeInput) {
        baseUrl += typeInput.value;
        console.log(typeInput.value)
        options = {
            method
        }
    }

    if (fileInput.length > 0) {
        method = "POST"
        var formData = new FormData();
        formData.append("file", fileInput.files[0]);
        options = {
            body: formData
        }
    }

    console.log("Making fetch")
    console.log(baseUrl)
    fetch(baseUrl, options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })

}