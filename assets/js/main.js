jQuery(document).ready(function($) {
  $(".video-btn").magnificPopup({
  	type:'video'
  });
	var center = [40.7855017,-74.025758,14];
  $('#map')
      .gmap3({
        center: center,
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        },
        scrollwheel: false
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
          // {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#E9E9E9"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#E9E9E9"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#E9E9E9"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#E9E9E9"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#c8d7d4"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      )
      .marker({
        position: center,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      });
});