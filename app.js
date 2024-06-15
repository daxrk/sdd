 $(document).ready(function () {
            var items = $("footer span");
            var svgPath = $("#torke svg path");

            items.click(function () {
                items.removeClass("active1");
                $(this).addClass("active1");

                // إعادة جميع مسارات svg إلى اللون الأسود
                svgPath.css("fill", "#000");

                // تغيير لون مسار svg الخاص بالزر النشط إلى اللون الأبيض
                if ($(this).attr("id") === "torke") {
                    svgPath.css("fill", "#fff");
                }
            });


            $("footer span:nth-child(1)").addClass("active1");
            // When the element with the ID 'se' is clicked
            $("#home").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net");
            });
            $("#home1").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net");
            });
            $("#me").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/who-are-we/");
            });
            $("#se").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/explanations/technology/");
            });
  $("#mi").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/internet-speed-test-online/");
            });
  
            $("#news").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/mobile-apps/");
            });
            $("#torke").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/mobile-games/");
            });
            $("#sport").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/explanations/gameex/");
            });
            $("#seicurty").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/privacy-policy/");
            });
            $("#callme").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/contact-us/");
            });
            $("#who").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/who-are-we/");
            });
   $("#apk").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/mobile-apps/apps-plus/");
            });
     $("#game").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/mobile-games/game-plus/");
            });
     $("#web").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/explanations/the-best-sites/");
            });
     $("#fre").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/free-fire-name-generator/");
            });
  $("#pubg").click(function () {
                // Update the source of the iframe
                $("iframe").attr("src", "https://www.mobilltna.net/pubg-name-generator/");
            });
            $("#open-menu").click(function () {
                openNav();
            });

            $("#close-menu,#me,#call span,#ad,#apk,#fre,#pubg,#web,#game").click(function () {
                closeNav();
            });

            $(document).click(function (event) {
                if (!$(event.target).closest("#side-menu").length && !$(event.target).is("#open-menu")) {
                    closeNav();
                }
            });

            function openNav() {
                $("#side-menu").css("inset-inline-start", "0");
                $("#navbarClose").addClass("active5");

            }

            function closeNav() {
                $("#side-menu").css("inset-inline-start", "calc(-100%)");
                $("#navbarClose").removeClass("active5");
            }
            $("#side-menu li a").append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
            var darkMode = false;

            $("#dark").click(function () {
                darkMode = !darkMode;

             if (darkMode) {
    $("#dark").text("الوضع الضوء");
    // تحديث الرمز المستخدم في الوضع الضوئي
    $("#dark::before").css("content", "'\f185'");
    $("#dark").attr("href", "##");
} else {
    $("#dark").text("الوضع الداكن");
    // تحديث الرمز المستخدم في الوضع الداكن
    $("#dark::before").css("content", "'\f186'");
    $("#dark").attr("href", "####");
}
            });

        });
        window.addEventListener('resize', function () {
            var iframe = document.getElementById('myIframe');
            iframe.style.height = window.innerHeight + 'px';
        });
