import storage from '@/api/storage/storage'
const 
  state = {
    showLogo: storage.getMemoryPmt('setting') ? storage.getMemoryPmt('setting').showLogo : true,
    showTags: storage.getMemoryPmt('setting') ? storage.getMemoryPmt('setting').showTags : true,
    showBreadcrumb: storage.getMemoryPmt('setting') ? storage.getMemoryPmt('setting').showBreadcrumb : true,
    isVerticleMenu: storage.getMemoryPmt('setting') ? storage.getMemoryPmt('setting').isVerticleMenu : true,
  }

export default {
  state
}