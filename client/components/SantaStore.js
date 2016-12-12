// MOBX store
// SantaStore.js
import { autorun, extendObservable } from 'mobx';
import data from '../appData';
import groupData from '../../fakeGroupData';

class SantaStore {

  constructor () {
    extendObservable(this, {
      wishListData: data,
      groupData: groupData,
      pendingList: [{avatar:'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}, {avatar: 'http://www.w3schools.com/css/trolltunga.jpg'}],
      currentUser: 'Bob',
      currentGroup: 0,
      itemSearchData: [],
      allUsers: null
    })

  }
 // MOBX mutates state directly in the store
 // good resource  http://www.robinwieruch.de/mobx-react/

}

const store = window.store = new SantaStore();
export default store;
export {SantaStore};

// autorun(() => {
//   console.log(store.filter);
//   console.log(store.users[0]);
// })