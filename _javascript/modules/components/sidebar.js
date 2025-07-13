/**
 * Expand or close the sidebar in mobile screens.
 */

const $body = $('body');
const ATTR_DISPLAY = 'sidebar-display';

let isExpanded = false;

function toggleSidebar() {
  if (isExpanded) {
    $body.removeAttr(ATTR_DISPLAY);
  } else {
    $body.attr(ATTR_DISPLAY, '');
  }
  isExpanded = !isExpanded;
}

export function initSidebarTrigger() {
  $('#sidebar-trigger').on('click', toggleSidebar);
  $('#mask').on('click', toggleSidebar);
}
