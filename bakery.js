function getWidth(obj) {
    var clone = obj.clone();
    clone.css("visibility", "hidden");
    $('body').append(clone);
    var width = clone.outerWidth();
    clone.remove();
    return width;
};

function getHeight(obj) {
    var clone = obj.clone();
    clone.css("visibility", "hidden");
    $('body').append(clone);
    var height = clone.outerHeight();
    clone.remove();
    return height;
};

function setMaxDim(pic, dim) {
    if (getHeight(pic) > getWidth(pic)) {
        $(pic).css('width', dim);
        $(pic).css('height', "auto");
    }
    else if (getHeight(pic) < getWidth(pic)) {
        $(pic).css('height', dim);
        $(pic).css('width', "auto");
    }
    return;
};
/*
function home() {
    $(window).animate({
        scrollTop: "0px";
    });
};*/
var main = function () {
    $('#home-button').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
         
    });
      $('#about-me-button').click(function () {
          var windowHeight = $(window).height();
        $("html, body").animate({ scrollTop: windowHeight }, "slow");
         
    });
     $('#gallery-button').click(function () {
          var windowHeight = $(window).height();
        $("html, body").animate({ scrollTop: 2*windowHeight }, "slow");
         
    });
    
    // ALIGN GALLERY
    $('#gallery li').each(function () {
        var pic = $(this).find('img');
        setMaxDim(pic, "300px");
    });
    // GALLERY IMG HOVER
    $('#gallery li').hover(function () {
        // Set img-container background color
        $('.img-container').css('background-color', "#000");
        $(this).find('img').fadeTo(400, 0.5);
        $(this).find('span').fadeTo(400, 1);
    }, function () {
        $(this).find('img').fadeTo(400, 1);
        $(this).find('span').fadeTo(400, 0);
    });
    // GALLERY LI CLICK
    $('#gallery li').click(function () {
        // Get img src
        var img = $(this).find('img').attr('src');
        // Set img src for expanded img
        $('.exp-img-container').find('img').attr('src', img);
        // Resize exp-img-container
        var pic = $('.exp-img-container').find('img');
        // Set height to 500
        $(pic).css('height', "500px");
        var width = getWidth(pic);
        // Set width to width of img
        $('.exp-img-container').css('width', width + "px");
        $('.wrapper').css('width', width + "px");
        // Center
        $('.wrapper').css('margin-left', -(width / 2));
        // Set title
        var title = $(this).find('span').text();
        $('.wrapper h2').text(title);
        // Set description
        var description = $(this).find('.description').text();
        $('.wrapper p').text(description);
        // Show overlay
        $('#overlay').show();
    });
    // CLOSE
    $('.close').click(function () {
        $('#overlay').hide();
    });
    /*
    // Show page when done
    $('body').css('visibility',"visible");
    $('html').css('visibility',"visible");*/
};
$(document).ready(main);
//$(window).on('load', main);