"use strict";

$('.dropdown-global-search a').click(function(){
    $('input[name="search-module"]').val($(this).data("target"));
    $('input[name="search-value"]').attr('placeholder', $(this).html());
    $('#globalSearchMenuButton').html($(this).data("target"));
});