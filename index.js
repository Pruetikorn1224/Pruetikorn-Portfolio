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
    });

    var certificateIndex = 0;
    const certificateFiles = [
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
    
    $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    for (var i = 0; i < certificateFiles.length; i++) {
        $(".certificates > .indicator-list").append('<div class="indicator"></div>')
    }
    $(".certificates > .indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");

    $(".certificates > .right-button").click(function() {
        $(".certificates > .indicator-list").children().eq(certificateIndex).css("background", "gray");
        $(".certificates > img").remove();
        if (certificateIndex == certificateFiles.length - 1) {
            certificateIndex = 0;
        }
        else {
            certificateIndex++;
        }
        $(".certificates > .indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");
        $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    });
    $(".certificates > .left-button").click(function() {
        $(".certificates > .indicator-list").children().eq(certificateIndex).css("background", "gray");
        $(".certificates > img").remove();
        if (certificateIndex == 0) {
            certificateIndex = certificateFiles.length - 1;
        }
        else {
            certificateIndex--;
        }
        $(".certificates > .indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");
        $(".certificates").append(`<img src="/images/certificates/${certificateFiles[certificateIndex]}">`);
    });

    
    var projectIndex = 0;
    $.getJSON('/images/projects/projects.json', function(jd) {
        const projectFiles = jd.projects;

        createProjectCard(projectFiles[projectIndex]);

        for (var i = 0; i < projectFiles.length; i++) {
            $(".projects > .indicator-list").append('<div class="indicator"></div>')
        }
        $(".projects > .indicator-list").children().eq(certificateIndex).css("background", "#d6d6d6");
    
    }).fail(function(){
        alert("An error has occurred.");
    });

    $(".projects > .right-button").click(function() {
        $(".projects > .indicator-list").children().eq(projectIndex).css("background", "gray");
        $(".project-card").remove();
        $.getJSON('/images/projects/projects.json', function(jd) {
            const projectFiles = jd.projects;

            if (projectIndex == projectFiles.length - 1) {
                projectIndex = 0;
            }
            else {
                projectIndex++;
            }
            
            $(".projects > .indicator-list").children().eq(projectIndex).css("background", "#d6d6d6");
            createProjectCard(projectFiles[projectIndex]);
        });
    });
    $(".projects > .left-button").click(function() {
        $(".projects > .indicator-list").children().eq(projectIndex).css("background", "gray");
        $(".project-card").remove();
        $.getJSON('/images/projects/projects.json', function(jd) {
            const projectFiles = jd.projects;

            if (projectIndex == 0) {
                projectIndex = projectFiles.length - 1;
            }
            else {
                projectIndex--;
            }
            
            $(".projects > .indicator-list").children().eq(projectIndex).css("background", "#d6d6d6");
            createProjectCard(projectFiles[projectIndex]);
        });
    });

    function createProjectCard(project) {
        $(".projects").append('<div class="project-card"></div>');
        $(".project-card").append(`<img src="${project.image}">`);
        $(".project-card").append(`<div><h4><b>${project.project}</b></h4></div>`);
        $(".project-card > div").append(`<p class="paragraph">${project.paragraph1}</p>`);
        $(".project-card > div").append(`<p class="paragraph">${project.paragraph2}</p>`);
        $(".project-card > div").append(`<a href="${project.link}" target="_blank" rel="noopener noreferrer">more information</a>`);
    }



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

function gotoBottom() {
    $("html, body").animate({ scrollTop: $(document).height() });
}