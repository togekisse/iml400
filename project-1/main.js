$(document).ready(function () {
    $(function () {
        $("#welcome-1, #welcome-2, #welcome-3, #welcome-4, #welcome-5, #welcome-bunny, #welcome-home, #puppy").draggable();
        //                                    $("#desktop-angela, #desktop-anne, #desktop-chloe, #desktop-devon, #desktop-gray, #desktop-hani, #desktop-indiana, #desktop-kenny, #desktop-mendy").resizable();
    });
    $('.cyber-title').hover(function () {
        $('#acknowledgement').fadeIn();
    }, function () {
        $('#acknowledgement').fadeOut();
    });

    $('#desktop-angela').hover(function () {
        $('#name-angela').fadeIn();
    }, function () {
        $('#name-angela').fadeOut();
    });
    $('#desktop-anne').hover(function () {
        $('#name-anne').fadeIn();
    }, function () {
        $('#name-anne').fadeOut();
    });
    $('#desktop-chloe').hover(function () {
        $('#name-chloe').fadeIn();
    }, function () {
        $('#name-chloe').fadeOut();
    });
    $('#desktop-devon').hover(function () {
        $('#name-devon').fadeIn();
    }, function () {
        $('#name-devon').fadeOut();
    });
    $('#desktop-gray').hover(function () {
        $('#name-gray').fadeIn();
    }, function () {
        $('#name-gray').fadeOut();
    });
    $('#desktop-hani').hover(function () {
        $('#name-hani').fadeIn();
    }, function () {
        $('#name-hani').fadeOut();
    });
    $('#desktop-indiana').hover(function () {
        $('#name-indiana').fadeIn();
    }, function () {
        $('#name-indiana').fadeOut();
    });
    $('#desktop-kenny').hover(function () {
        $('#name-kenny').fadeIn();
    }, function () {
        $('#name-kenny').fadeOut();
    });
    $('#desktop-mendy').hover(function () {
        $('#name-mendy').fadeIn();
    }, function () {
        $('#name-mendy').fadeOut();
    });

    var counter = 0;

    $("#watering-can").click(function () {

        counter++;
        if (counter == 6) {
            $("#vine-layer-1").fadeOut(3200);
            $("#vine-layer-2").fadeOut(2500);
            $("#vine-layer-3").fadeOut(2000);
            $("#vine-layer-4").fadeOut(1700);
            $("#vine-layer-5").fadeOut(1200);
            $("#vine-layer-6").fadeOut(3500);
            counter = 0;
        } else if (counter == 5) {
            $("#vine-layer-6").fadeIn(2500);
        } else if (counter == 4) {
            $("#vine-layer-5").fadeIn(1300);
        } else if (counter == 3) {
            $("#vine-layer-3").fadeIn(2000);
            $("#vine-layer-4").fadeIn(1200);
        } else if (counter == 2) {
            $("#vine-layer-2").fadeIn(2500);
        } else if (counter == 1) {
            $("#vine-layer-1").fadeIn(2000);
        }

    });
});
