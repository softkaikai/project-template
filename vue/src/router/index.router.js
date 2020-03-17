import loginRoutes from './login/login.router';
import messageRoutes from './message/message.router';

const routes = [
    {
        path: 'main',
        component: '',
        children: [
            ...loginRoutes,
            ...messageRoutes,
        ]
    }
];


export default routes;
