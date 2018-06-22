import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import About from '@/views/About.vue';
import { frontEndSkills, backEndSkills, services } from './___mocked___/data';

const localVue = createLocalVue();

function toValueString(array: string[]) {
  return array
    .map(i => `<li>${i}</li>`)
    .toString()
    .split(',')
    .join('');
}

describe('About.vue', () => {
  const wrapper = shallowMount(About, {
    localVue,
    stubs: {
      'vue-particles': 'vue-particles',
    },
    data: () => ({
      isVisible: true,
    }),
  });
  it('renders About page', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.exists()).toBe(true);
  });
  it('renders proper text inside About page', () => {
    const h1 = wrapper.find('h1');
    const h2s = wrapper.findAll('h2');
    const firsth2 = h2s.at(0);
    const secondh2 = h2s.at(1);
    const thridh2 = h2s.at(2);
    expect(h1.text()).toBe('Full name: Sergey Ustinov');
    expect(firsth2.text()).toBe('Front-end Developer');
    expect(secondh2.text()).toBe('Location: Ukraine/Vinnitsa');
    expect(thridh2.text()).toBe('Skills:');
  });
  it('renders p"s in About page', () => {
    const pArr = wrapper.findAll('p');
    expect(pArr).toBeTruthy();
  });
  it('should renders properly skills list in About page', () => {
    const uls = wrapper.findAll('ul');
    const fisrtSkills = toValueString(frontEndSkills);
    const secondSkills = toValueString(backEndSkills);
    const thirdSkills = toValueString(services);

    expect(uls.exists()).toBeTruthy();
    expect(uls.at(0).element.innerHTML).toBe(fisrtSkills);
    expect(uls.at(1).element.innerHTML).toBe(secondSkills);
    expect(uls.at(2).element.innerHTML).toBe(thirdSkills);
  });
});
