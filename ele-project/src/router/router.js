const header = r => require.ensure([], () => r(require('@/components/Header.vue')), 'header');
const home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'home');

export default [{
  path: '',
  component: home
}, {
  // 首页    
  path: '/home',
  component: home
}]
