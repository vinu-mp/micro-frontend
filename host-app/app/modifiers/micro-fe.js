import Modifier from 'ember-modifier';

export default class MicroFeModifier extends Modifier {
  async modify(element) {
    // load mfe
    const module = await import('http://localhost:4173/app-loader.js')
    // Call mountApp method to inject the mfe app
    await module.mountApp({ element, options: { baseURL: 'http://localhost:4173/' }});
  }
}
