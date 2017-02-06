var $j = jQuery.noConflict();
function add_ep_click_event() {
	$j('.linkful.resolution-block').off('click.hsreleases');
	$j('.linkful.resolution-block').on('click.hsreleases', function() {
		var rls_node_ID = $j(this).parents('.episode').attr('id');
		var rls_resolution_ID = $j(this).contents().first().text();
		if($j('.'+rls_node_ID).length) { //link block already exists
			if($j('.'+rls_node_ID).attr('id') == rls_resolution_ID) { //same resolution, then hide
				$j('.'+rls_node_ID).slideUp('fast', function () {
					$j('.'+rls_node_ID).remove();
				});
			} else {
				$j('.'+rls_node_ID).slideUp('fast', function () {  //different resolution, then redraw
					$j('.'+rls_node_ID).remove();
					var link_html = '<div class="episode-links ' + rls_node_ID + '" id="' + rls_resolution_ID + '">' + $j('.episode#'+rls_node_ID).find('.resolution-links#'+rls_resolution_ID).html() + '</div>';
					$j(link_html).hide().insertAfter($j('.episode#'+rls_node_ID)).slideDown('fast');
				});
			}
		} else { //link block doesn't exist
			var link_html = '<div class="episode-links ' + rls_node_ID + '" id="' + rls_resolution_ID + '">' + $j(this).children('.resolution-links').html() + '</div>';
			$j(link_html).hide().insertAfter($j(this).parents('.episode')).slideDown('fast');
		}
		return false;
	});
}
$j(function () {
	$j('.latest').load('/lib/latest.php', function () { //default show
		add_ep_click_event();
	});	
	$j('.morebox').on('click', '.morebutton', function () { //default show more
		var more_ID = $j(this).attr('id');
		if (more_ID < 3) {
			var more_nextID = (parseInt(more_ID)+1).toString();
			var more_old_button = $j('.morebox').html();
			$j('.morebox').html('Loading...');
			$j.ajax({
				url: '/lib/latest.php',
				data: 'nextid=' + more_nextID,
				cache: false,
				success: function(html) {
					$j('.morebox').html(more_old_button);
					$j('.latest').append(html);					
					$j('.morebutton').attr('id', more_nextID);
					add_ep_click_event();
					$j('.refreshlink a').html('Clear');
				}
			});
		} else {
			$j('.morebox').html("Visit Nyaa for older releases.");
			$j('.refreshlink a').html('Clear');
		}
		return false;
	});
	$j('#search').submit(function() { //search
		$search_term = $j('.searchbar').val();
		$j.ajax({
			url: '/lib/search.php',
			data: 'value=' + $search_term,
			cache: false,
			success: function(html) {
				$j('.latest').fadeOut(function() {
					$j('.latest').html(html).fadeIn();
					add_ep_click_event();
				});
				$j('.morebox').html('<a href="#" style="display: block;" class="searchmorebutton" id="0" search_term="' + $search_term + '">Show more</a>')
				$j('.refreshlink a').html('Clear');
			}
		});
		return false;
	});
	$j('.morebox').on('click', '.searchmorebutton', function () { //search_more
		var more_ID = $j(this).attr('id');
		var current_search_term = $j(this).attr('search_term');
		var more_old_button = $j('.morebox').html();
		if (more_ID < 3) {
			var more_nextID = (parseInt(more_ID)+1).toString();
			var more_old_button = $j('.morebox').html();
			$j('.morebox').html('Loading...');
			$j.ajax({
				url: '/lib/search.php',
				data: 'value=' + $search_term + '&nextid=' + more_nextID,
				cache: false,
				success: function(html) {
					$j('.morebox').html(more_old_button);
					if(html === '') {
						$j('.morebox').html("That's all.");
					} else {
						$j('.latest').append(html);					
						$j('.searchmorebutton').attr('id', more_nextID);
						add_ep_click_event();
					}

				}
			});
		} else {
			$j('.morebox').html("Visit Nyaa for older releases.");
		}
		return false;
	});
	$j('.refreshlink').on('click', '.refreshbutton', function() { //refresh
		$j.ajax({
			url: '/lib/latest.php',
			success: function(html) {
				$j('.latest').fadeOut(function () {
					$j('.latest').html(html).fadeIn();
					add_ep_click_event();
				});
				$j('.morebox').html('<a href="#" style="display: block;" class="morebutton" id="0">Show more</a>');
				$j('.refreshlink a').html('Refresh');
			}
		});
		return false;
	});
});