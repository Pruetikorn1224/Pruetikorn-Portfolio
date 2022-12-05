$(document).ready(function() {

    $(".button-list > li").click(function() {
        var index =  $("li").index(this);

        switch(index) {
            case 0:
                $("html, body").animate({ scrollTop: 0 });
                break;
            case 1:
                $("html, body").animate({ scrollTop: $(".about-me").offset().top });
                break;
            case 2:
                $("html, body").animate({ scrollTop: $(".resume").offset().top });
                break;
            case 3:
                $("html, body").animate({ scrollTop: $(".portfolio").offset().top });
                break;
            default:
                alert("There is an error!");
        }
    });

    var isAboutLocked = true;
    const unhideAbout = '  <i class="fa-solid fa-lock-open lock-key"></i>';
    const hideAbout = '  <i class="fa-solid fa-lock lock-key"></i>';

    $(".contact-button").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() });
    });

    $(".about-me > h1").click(function() {
        $(".about-me > h1 > i").remove();
        if(isAboutLocked) {
            $(".about-me > h1").append(unhideAbout);
            $("table").slideDown("slow");
            isAboutLocked = false;
        }
        else {
            $(".about-me > h1").append(hideAbout);
            $("table").slideUp("slow");
            isAboutLocked = true;
        }
    })

    var certificateFiles = [
        '/Unity-Certified-User.png',
        '/fortytwo.png',
        '/depa3r.png',
        '/startup.png',
        '/build_on_asean.png',
        '/cmkl.png',
        '/kurume.png',
        '/ielts_academic.png',
        '/Ietls_UKVI.png'
    ];
    var certificateIndex = 0;
    $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    for (var i = 0; i < certificateFiles.length; i++) {
        $(".indicator-list").append('<div class="indicator"></div>')
    }
    $(".indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");

    $(".certificates > .right-button").click(function() {
        $(".indicator-list").children().eq(certificateIndex).css("background", "gray");
        $(".certificates > img").remove();
        if (certificateIndex == certificateFiles.length - 1) {
            certificateIndex = 0;
        }
        else {
            certificateIndex++;
        }
        $(".indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");
        $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    });
    $(".certificates > .left-button").click(function() {
        $(".indicator-list").children().eq(certificateIndex).css("background", "gray");
        $(".certificates > img").remove();
        if (certificateIndex == 0) {
            certificateIndex = certificateFiles.length - 1;
        }
        else {
            certificateIndex--;
        }
        $(".indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");
        $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    });

    $(".facebook").click(function() {
        window.location = "https://www.facebook.com/preutikorn.chirattitikarn";
        console.log(window.location);
    });

    $(".gmail").click(function() {
        window.open('mailto:benzpreu@gmail.com');
    });

    $(".github").click(function() {
        window.location = "https://github.com/Pruetikorn1224";
        console.log(window.location);
    });

    $(".linkedin").click(function() {
        window.location = "https://www.linkedin.com/in/ch-pruetikorn/";
        console.log(window.location);
    });

    $(".medium").click(function() {
        window.location = "https://medium.com/@benzpreu";
        console.log(window.location);
    });
});