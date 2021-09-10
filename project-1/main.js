//$(document).ready(function () {
//  $(function () {
//    $(
//      "#computer-plants, #plant1, #plant2, #plant3, #plant4, #p2,.pop-up"
//    ).draggable();
//  });
//
//  $("#p1").click(function () {
//    $(".pop-up").toggle();
//  });
//
//  $("#computer2").click(function () {
//    //        $("#plant4").hide();
//    $("#plant4").toggle();
//  });
//
//  $("#computer1").hover(
//    function () {
//      $("#p2").fadeIn();
//    },
//    function () {
//      $("#p2").fadeOut();
//    }
//  );
//
//  $("#computer2").hover(
//    function () {
//      $("#p3").fadeIn();
//    },
//    function () {
//      $("#p3").fadeOut();
//    }
//  );
//
//  $("#computer3").hover(
//    function () {
//      $("#p4").fadeIn();
//    },
//    function () {
//      $("#p4").fadeOut();
//    }
//  );
//
//  var vineImg = [
//    "url(asset/vines-1.jpg)",
//    "url(asset/vines-2.jpg)",
//    "url(asset/vines-3.jpg)",
////    "url(asset/bg-3.jpg)",
////    "url(asset/bg-5.jpg)",
//  ];
//
//  var counter = 0;
//    
//
//  $("button").click(function () {
//    if (counter == bgImg.length) {
//      counter = 0;
//    }
//    var currentVines = vineImg[counter];
//    $("body").css("background-image", currentBg);
//    counter++;
//  });
//});

$(document).ready(function () {
    //    $(function () {
    //        $("#desktop-angela, #desktop-anne, #desktop-chloe, #desktop-devon, #desktop-gray, #desktop-hani, #desktop-indiana, #desktop-kenny, #desktop-mendy").draggable();
    //                                $("#desktop-angela, #desktop-anne, #desktop-chloe, #desktop-devon, #desktop-gray, #desktop-hani, #desktop-indiana, #desktop-kenny, #desktop-mendy").resizable();
    //    });
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
    //            $("#desktop-angela, #desktop-anne, #desktop-chloe, #desktop-devon, #desktop-gray, #desktop-hani, #desktop-indiana, #desktop-kenny, #desktop-mendy").hover(function () {
    //                    $("this").toggleClass(".grow");
    //                }

    var counter = 0;

    $("button").click(function () {

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
