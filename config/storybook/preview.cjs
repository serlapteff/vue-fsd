// import {app} from '@storybook/vue3';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator.vue'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// export const decorators = [(story) => ({
//   components: { story },
//   template: `<StyleDecorator><story /></StyleDecorator>`
// })];
// app.component('router-link', RouterLink);
