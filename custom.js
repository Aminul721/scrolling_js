jQuery(window).scroll(function(){
  var visible_offH = jQuery('.visible_itme1').offset().top;
  var visible_offH2 = jQuery('.visible_itme2').offset().top;

  var visible_innerH = jQuery('.visible_itme1').height();
  var visible_innerH2 = jQuery('.visible_itme2').height();

  var scree_vh = jQuery(window).height();
  var scrollTop = jQuery(this).scrollTop();

  // offset top form scree height positiive
  var total_h_header_innH = visible_offH + visible_innerH;
  var total_h_header_innH2 = visible_offH2 + visible_innerH2;

  // offset top form scree height nagetive
  var total_h_header = visible_offH - scree_vh;
  var total_h_footer = visible_offH2 - scree_vh;


  if (( scrollTop > total_h_header && scrollTop < total_h_header_innH )  || ( scrollTop > total_h_footer && scrollTop < total_h_header_innH2 )) {
  	jQuery('.show_hide_btn').addClass('bg_none');
  }else {
  	jQuery('.show_hide_btn').removeClass('bg_none');
  }


  console.log(
    'visible_offH2:' + visible_offH2, '\n',
    'visible_innerH2:' + visible_innerH2, '\n',
    'total_h_header_innH2:' + total_h_header_innH2, '\n',
    'total_h_footer:' + total_h_footer, '\n',
    'scrollTop:' + scrollTop, '\n',
    );
});