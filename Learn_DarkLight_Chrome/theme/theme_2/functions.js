function initTheme() {
    if (!isWLU()) {

        // bg - waterloo
        $('.d2l-page-main').prepend('<div class="darklight-waterloo" style="background-image: url(' + baseURL + 'img/ottawa_background.png); opacity: 0.2;"></div>');

        // logo - white
        $('.d2l-navigation-s-logo-link img').attr('src', baseURL + 'img/uottawow_logo.png').css('opacity', 0.8);

    } else {

        // for wlu learn (beta)
        $('.d2l-navigation-s-logo-link img').attr('src', baseURL + 'img/uottawow_logo.png').css('opacity', 0.8);

    }

    // if (currURL.includes('/content/')) {
    //     var pageHeaderLine = $('.d2l-page-header').next('div').next('div');
    //     if (pageHeaderLine.text().trim() == '')
    //         pageHeaderLine.hide();
    // }

    // quiz & survey warning
    if (currURL.match(/\/quizzing\//g)) {
        // || currURL.includes('/survey/') || currURL.includes('/dropbox/')
        alert('This theme has made many changes to the original webpage. In order to ensure nothing will go wrong, it\'s recommended to switch to other themes before you continue your work here.');
    }

    // calendar - upcoming
    if (currURL.match(/\/d2l\/home\/\d+/)) {
        $('.d2l-collapsepane-header').each(function (i, e) {
            if ($(e).text().match(/upcoming events/gi)) {
                $(e).parent('div.d2l-collapsepane').addClass('darklight-upcoming-events');
            }
        });
        $('.d2l-widget-header').each(function (i, e) {
            var headText = $(e).text();
            if (headText.match(/Calendar/)) {
                $(e).parents('div.d2l-widget').addClass('darklight-course-home-calendar');
            }
        });
    }
}

initTheme();
