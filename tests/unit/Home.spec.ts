import { shallowMount, mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

describe('Home.vue', () => {
  const wrapper = mount(Home, {
    localVue,
    stubs: {
      // eslint-disable-next-line
      RouterLink: RouterLinkStub,
      'vue-particles': 'vue-particles',
    },
    data: () => ({
      isVisible: true,
    }),
  });
  it('renders Home page', () => {
    expect(wrapper).toBeTruthy();
  });
  it('renders Home page has router link', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/about');
  });
  it('Should be isVisible true', () => {
    expect(wrapper.vm.$data.isVisible).toBe(true);
  });
  it('Should set isVisible false', () => {
    expect(wrapper.vm.$data.isVisible).toBe(true);
    wrapper.find('.profile').trigger('click');
    wrapper.setData({
      isVisible: false,
    });
    expect(wrapper.vm.$data.isVisible).toBe(false);
  });
});
