import router from '../apiRouter';

describe('api router', () => {
  test('has routes', () => {
    const routes = [
      { path: '/allPoke', method: 'get' },
      { path: '/:id', method: 'get' },
      { path: '/name', method: 'get' }
    ];

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      );
      expect(match).toBeTruthy();
    });
  });
});
