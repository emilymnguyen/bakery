function getWidth(obj){
    var clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    var width = clone.outerWidth();
    clone.remove();
    return width;
};

function getHeight(obj){
    var clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    var height = clone.outerHeight();
    clone.remove();
    return height;
};

function setMaxDim(pic, dim) {
    if (getHeight(pic) >= getWidth(pic)) {
           $(pic).css('width',dim);
        $(pic).css('height',"");
    }
         else {
           $(pic).css('height',dim);
             $(pic).css('width',"");
         }
    return;
}


var main = function () {
    // ALIGN GALLERY
    $('#gallery li').each(function () {
        var pic = $(this).find('img');
        setMaxDim(pic,"280px");
        });
    
    // GALLERY IMG HOVER
    $('#gallery li').hover(function () {
        $(this).find('img').fadeTo(400,0.5);
        $(this).find('span').fadeTo(400,1);
    }, function() {
        $(this).find('img').fadeTo(400,1);
        $(this).find('span').fadeTo(400,0);
    });
    // GALLERY LI CLICK
    $('#gallery li').click(function () {
      
        // Get img src
        var img = $(this).find('img').attr('src');
        // Set img src for expanded img
        $('.exp-img-container').find('img').attr('src',img);
        // Align exp image
        var pic = $('.exp-img-container').find('img');
        setMaxDim(pic, "500px");
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
