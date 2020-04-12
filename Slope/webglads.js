window.SkipAd = function() {

    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        removeAdvert();
    }

    if (!stop)
        setTimeout(window.SkipAd, 500);
}

window.ShowAd = function() {

    //console.log('window.ShowAd');
    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        checkAndShowAdvert();
    }

    if (!stop)
        setTimeout(window.ShowAd, 500);
}

window.LoadAd = function() {

    //console.log('window.LoadAd');
    var stop = false;
    if (typeof jQuery !== 'undefined') {
        stop = true;
        checkAndLoadAdvert();

    }

    if (!stop)
        setTimeout(window.LoadAd, 500);
}

function insertAdvert() {
    var gs = getGoogleString();
    $(".googleadgoeshere").append(gs);
}

function removeAdvert() {
    $(".googleadgoeshere").empty();
}

function loadAdvert() {
    var gs = getGoogleString();
    $(".googleadgoeshere").append(gs);
    hideAdvert();
}

function showAdvert() {
    if (isDivValid()) {
        $(".googleadgoeshere").show();
    }
}

function checkAndLoadAdvert() {
    if (isDivValid()) {
        return;
    } else {
        loadAdvert();
    }
}

function checkAndShowAdvert() {
    if (isDivValid()) {
        $(".googleadgoeshere").show();
    } else {
        insertAdvert();
    }
}

function isDivValid() {
    if ($('.googleadgoeshere').length && $('.googleadgoeshere').html().length !== 0) {
        return true;
    } else {
        return false;
    }
}

function hideAdvert() {
    if ($('.googleadgoeshere').length) {
        $(".googleadgoeshere").hide();
    }
}

function getGoogleString()
{
    return (
        '<div style="position:absolute; top: 0; left: 0; background-color:black; z-index:2147483647; overflow:auto; width:100%; height:100%; pointer-events:auto;">' +
        '<div>' +
            '<button onclick="window.SkipAd()" style="background:transparent;border: none;top:5%;right:4.2%;position:fixed;">' +
            '<img src="skip.png" style="background:transparent;border: none;width:38px; height:38px;"><\/button>' +
        '<\/div>'+
            '<div style="text-align:center;position: relative;' +
                'top:30%;' +
                'z-index:2147483648;">' +
                '<div>' +
                    '<script async src="\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js"><\/script>' +
                    '<!-- Slope 300 x 250 -->' +
                    '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px;" data-ad-client="ca-pub-5910291961299855" data-ad-slot="8678016344"><\/ins>' +
                    '<script>' +
                        '(adsbygoogle = window.adsbygoogle || []).push({});' +
                    '<\/script>' +
                '<\/div>' +
            '<\/div>' +
        '<\/div>'
    );
}
