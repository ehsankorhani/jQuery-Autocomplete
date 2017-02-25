$(function () {
    'use strict';

    // Initialize autocomplete:
    $('#autocomplete-control').autocomplete({
        lookup: countries,
        text: 'name',
        value: 'code',
        header: [{
            'title': 'Country Name',
            'width': 'auto'
        }],
        showHeader: true,
        pageSize: 8,
        suggestionClass: null,
        caseSensitive: false,
        autoSelectFirst: false
    });
});