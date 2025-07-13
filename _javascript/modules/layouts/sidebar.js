import { modeWatcher } from '../components/mode-watcher';
import { initSidebarTrigger } from '../components/sidebar';

export function initSidebar() {
  modeWatcher();
  initSidebarTrigger();
}
