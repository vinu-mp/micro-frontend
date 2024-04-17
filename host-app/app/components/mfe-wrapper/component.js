import Component from '@glimmer/component';
import { service } from '@ember/service'

export default class MfeWrapper extends Component {
  @service router

  constructor() {
    super(...arguments);
    this.handleAdminEventsCallBack = this.handleAdminEvents.bind(this);
    this.subscribeChatAdminEvents();
  }

  willDestroy () {
    super.willDestroy(...arguments);
    this.unSubscribeChatAdminEvents();
  }

  subscribeChatAdminEvents() {
    window.addEventListener('message', this.handleAdminEventsCallBack);
  }

  unSubscribeChatAdminEvents() {
    window.removeEventListener('message', this.handleAdminEventsCallBack);
  }

  handleAdminEvents(events) {
    const { type, payload } = events.data;

    switch (type) {
      case "NAVIGATE": {
        const { route } = payload;
        this.router.transitionTo(route)
        break;
      }
      case "LOG":
        console.log(payload)
        break;
    }
  }
}
