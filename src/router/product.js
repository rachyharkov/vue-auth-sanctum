export default [
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/Product/IndexView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Products',
            description: 'Products'
        }
    },
    {
        path: '/products/:id',
        name: 'productsDetail',
        component: () => import('../views/Product/DetailView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Product Detail',
            description: 'Product Detail'
        }
    },
    {
        path: '/products/:id/edit',
        name: 'productsEdit',
        component: () => import('../views/Product/EditView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Product Edit',
            description: 'Product Edit'
        }
    },
    {
        path: '/products/create',
        name: 'productsCreate',
        component: () => import('../views/Product/CreateView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Product Create',
            description: 'Product Create'
        }
    }
]