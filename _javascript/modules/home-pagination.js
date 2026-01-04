function clampPage(page, totalPages) {
  return Math.max(1, Math.min(page, totalPages));
}

function scrollToList($target) {
  if (!$target.length) return;

  const offsetTop = $target.offset().top;
  const topbarHeight = $('#topbar-wrapper').outerHeight() || 0;

  $('html, body').animate(
    {
      scrollTop: offsetTop - topbarHeight - 8
    },
    200
  );
}

function updatePage({ page, totalPages, $posts, $pageButtons, $prev, $next, $listRoot }) {
  const currentPage = clampPage(page, totalPages);

  $posts
    .addClass('d-none')
    .filter(`[data-page=${currentPage}]`)
    .removeClass('d-none');

  $pageButtons.removeClass('active');
  $pageButtons.filter(`[data-page=${currentPage}]`).addClass('active');

  $prev.prop('disabled', currentPage === 1);
  $next.prop('disabled', currentPage === totalPages);

  scrollToList($listRoot);

  return currentPage;
}

export function initRecentPagination() {
  if (typeof $ === 'undefined') return;

  const $listRoot = $('#recent-posts');
  const $pagination = $('#recent-pagination');

  if (!$listRoot.length || !$pagination.length) return;

  const postsPerPage = Number($listRoot.data('posts-per-page')) || 6;
  const totalPages = Number($listRoot.data('total-pages')) || 1;
  const $posts = $listRoot.children('.recent-post');
  const $pageButtons = $pagination.find('.page-number');
  const $prev = $pagination.find('[data-pagination="prev"]');
  const $next = $pagination.find('[data-pagination="next"]');

  if ($posts.length === 0 || totalPages <= 1) {
    $pagination.hide();
    return;
  }

  let currentPage = 1;

  $pageButtons.on('click', (event) => {
    const page = Number($(event.currentTarget).data('page'));
    currentPage = updatePage({
      page,
      totalPages,
      $posts,
      $pageButtons,
      $prev,
      $next,
      $listRoot
    });
  });

  $prev.on('click', () => {
    currentPage = updatePage({
      page: currentPage - 1,
      totalPages,
      $posts,
      $pageButtons,
      $prev,
      $next,
      $listRoot
    });
  });

  $next.on('click', () => {
    currentPage = updatePage({
      page: currentPage + 1,
      totalPages,
      $posts,
      $pageButtons,
      $prev,
      $next,
      $listRoot
    });
  });

  // Initialize to the first page
  updatePage({
    page: currentPage,
    totalPages,
    $posts,
    $pageButtons,
    $prev,
    $next,
    $listRoot
  });
}
