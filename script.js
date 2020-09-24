

function each(coll, fn) {
    if (Array.isArray(coll) || typeof coll === 'string') {
        for (var i = 0; i < coll.length; i++) {
            fn(coll[i], i)
        }
    } else {
        for (var key in coll) {
            fn(coll[key], key)
        }
    }
}


var universities = {
    "illinois": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/illinois.svg?auto=format%2Ccompress&dpr=1&w=&h=32", "https://www.coursera.org/illinois"],

    "duke": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/duke.svg?auto=format%2Ccompress&dpr=1&w=&h=37", "https://www.coursera.org/duke"],

    "google": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/google.png?auto=format%2Ccompress&dpr=1&w=&h=37", "https://www.coursera.org/google"],

    "umich": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55", "/https://www.coursera.org/umich"],

    "ibm": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/ibm.png?auto=format%2Ccompress&dpr=1&w=&h=32", "https://www.coursera.org/ibm"],

    "imperial": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/imperial.png?auto=format%2Ccompress&dpr=2&w=&h=35", "/https://www.coursera.org/imperial"],

    "stanford": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/stanford.svg?auto=format%2Ccompress&dpr=2&w=&h=27", "/https://www.coursera.org/stanford"],

    "penn": ["https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/penn.svg?auto=format%2Ccompress&dpr=1&w=&h=37", "/https://www.coursera.org/penn"]
}

function addUniPic(obj) {

    each(obj, function (value, key) {

        var container = $('#parnters-co');
        var aTag = $('<a class="partner-logo"></a>');
        var img = $('<img>');
        img.attr("src", obj[key][0]);
        aTag.attr("href", obj[key][1]);

        aTag.append(img);
        container.append(aTag);
    });
}

addUniPic(universities);

var pics = document.getElementsByClassName("partner-logo");

pics[5].style.maxHeight = "35px";

pics[6].style.height = "27";

pics[7].style.height = "37";