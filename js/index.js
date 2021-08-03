let spinner = document.getElementById("spinner");
let exampleImage = document.getElementById("exampleImage");

let fileInput = document.getElementById("file-upload");
let numberInput = document.getElementById("numberHats");
let typeInput = document.getElementById("typeInput");

function getImage(event) {
    event.preventDefault();

    let baseUrl = "http://afebcb99496764eaeac38b3f3ee17545-643504213.us-east-2.elb.amazonaws.com/";

    let method = "GET";
    let options = {}
    // show spinner and hide the person
    spinner.classList.remove("hidden");
    exampleImage.classList.add('hidden');

    if (typeInput) {
        baseUrl += typeInput.value;
        options = {
            method
        }
    }

    if (fileInput.files.length > 0) {
        console.log("file has been added")
        method = "POST"
        var formData = new FormData();
        formData.append("file", fileInput.files[0]);
        options = {
            method,
            body: formData
        }
    }

    console.log("Making fetch")
    console.log(baseUrl)
    console.log(options)
    fetch(baseUrl, options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            exampleImage.src = data.result.finalBaby
            console.log(exampleImage)
            exampleImage.classList.remove("hidden")
            spinner.classList.add("hidden")
        })

}

window.onload = async function getHats(event) {
    event.preventDefault();

    console.log("Getting hats")
    let baseUrl = "http://afebcb99496764eaeac38b3f3ee17545-643504213.us-east-2.elb.amazonaws.com/";

    // get description and image links
    let hats = await fetch(`${baseUrl}api/hats`, {
        method: "GET"
    })
    let hatList = await hats.json()
    console.log(hatList)
    let wrapper = document.querySelector(".swiper-wrapper");
    // loop through to populate options and images
    for (var i = 0; i < hatList.length; i++) {
        $('#HATSelect').find('select[id="typeInput"]').append($('<option/>', {
            value: hatList[i].description,
            text: hatList[i].description,
        }));

        $('.swiper-wrapper').append(`<div class="swiper-slide d-flex align-items-center justify-content-center"><img class="img-fluid swiper-pic" width="100px" src="${hatList[i].url}" alt=""></div>`)
    }

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 1000,
        breakpoints: {
            // when window width is >= 320px
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 8,
                spaceBetween: 20
            }
        }
    });

    console.log("init swiper");

}
