/**
 * Created by PaulZimmel on 10/29/15.
 */
$(document).ready(function() {
    $('button').on('click', function() {
        $('header').slideDown();
        $('main').slideDown();
        $(this).remove('button');
    });
});