$(document).ready(function() {

    // var projectFiles = new Array();
    // var certificateFiles = new Array();

    var isAboutLocked = true;
    var unhideAbout = '  <i class="fa-solid fa-lock-open lock-key"></i>';
    var hideAbout = '  <i class="fa-solid fa-lock lock-key"></i>';

    $(".button-list > li").click(function() {
        var index =  $("li").index(this);

        switch(index) {
            case 0:
                $("html, body").animate({ scrollTop: 0 });
                break;
            case 1:
                $("html, body").animate({ scrollTop: 720 });
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