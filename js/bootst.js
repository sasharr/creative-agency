$(window).on('load', function () {

    var $container = $('.isotope');

    $('#filters button').click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({itemSelector: '.item', filter: selector, masonry: {gutter: 6, horizontalOrder: true}});
        return false;
    });// filter buttons

    $('.isotope').masonry({
        itemSelector: '.item',
        columnWidth: '.item',
        gutter: 6,
        horizontalOrder: true
    });//masonry


    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        horizontalOrder: true
    });//masonry
});
