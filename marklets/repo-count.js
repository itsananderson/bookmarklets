javascript:(function() {
    if ($('.more-repos-link').length != 0) {
        $.get('/dashboard/ajax_your_repos', function(response) {
            $('#repo_listing').html(response);
            $('.more-repos').remove();
            repoCount();
        }, 'text');
    } else {
        repoCount();
    }
    function repoCount() {
        $('.js-repo-filter-tab').each(function() {
            var $this = $(this);
            console.log($this.attr('data-filter'));
            var repolist = $('.repo-list, #repo_listing').find($this.attr('data-filter'));
            console.log(repolist);
            $this.html($this.text() + '<p style="text-align: center; margin: 0">(' + repolist.length + ')</p>');
        });
        $('.repo_filterer').css("margin-top", 0);
    }
})();
