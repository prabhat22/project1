$(document).ready(function() {
        $('#particles').particleground({
            minSpeedX: 0.1,
            maxSpeedX: 0.7,
            minSpeedY: 0.1,
            maxSpeedY: 0.7,
            directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
            directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
            density: 18000, // How many particles will be generated: one particle every n pixels
            dotColor: 'white',
            lineColor: 'rgba(0,0,0,0.5)',
            particleRadius: 7, // Dot size
            lineWidth: 1,
            curvedLines: false,
            proximity: 200, // How close two dots need to be before they join
            parallax: true,
            parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
            onInit: function() {},
            onDestroy: function() {}
        });
           var chck=false;
        $("#btn").click(function(){
           
        $("#main-nav").slideToggle(1000);
          /* if(chck==false)
                {
                    
                
            $("i").replaceWith('<i class="fa fa-times" aria-hidden="true"></i>')
                chck=true;
                } else {
                 
                    $("i").replaceWith('<i class="fa fa-bars" aria-hidden="true"></i>')
                chck=false;
                }*/
        }) ;
    $(window).scroll(function(){
        if($(document).scrollTop()>40){
            $("#header").addClass("move");
        }
        else{
            $("#header").removeClass("move");
        }
    });
    var owl=$('.owl-carousel');
        owl.owlCarousel({
         items : 4,
         loop:true,
        //   autoplay:true,
        autoplayTimeout:1000,  
  });
});

