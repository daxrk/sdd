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

            $("#close-menu,#me,#call span,#ad").click(function () {
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
                    $("#side-menu").css("background-color", "#171717");
                    $("#side-menu ul li").css("background-color", "#171717");
                    $("#side-menu a").css("color", "#fff");
                    $("#call").css({
                        "background-color": "#171717",
                        "color": "#fff"
                    });
                } else {
                    $("#dark").text("الوضع الداكن");
                    $("#side-menu").css("background-color", ""); // Reset to default
                    $("#side-menu ul li").css("background-color", ""); // Reset to default
                    $("#side-menu a").css("color", ""); // Reset to default
                    $("#call").css({
                        "background-color": "", // Reset to default
                        "color": "" // Reset to default
                    });
                }
            });

        });
        window.addEventListener('resize', function () {
            var iframe = document.getElementById('myIframe');
            iframe.style.height = window.innerHeight + 'px';
        });
