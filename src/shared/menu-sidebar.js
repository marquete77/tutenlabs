export const MenuSidebar = [
    // {
    //     id: 1,
    //     name: 'Dashboard',
    //     permission: [],
    //     icon: 'tachometer-alt',
    //     isSection: false,
    //     link: '/dashboard',
    //     sections: [],
    //     subsection: []
    // },
    {
        id: 2,
        name: 'Administración operativa',
        permission: [],
        permissionBoolean: true,
        icon: 'chart-pie',
        isSection: true,
        link: '',
        sections: [
            '/services-definition',
        ],
        subsection: [
            {
                id: 1,
                name: 'Servicios',
                permission: [],
                icon: 'plus-square',
                isSection: false,
                link: '/services-definition',
                sections: [],
                actions: [
                    '/services-definition/create'
                ],
                subsection: [
                    // {
                    //     id: 1,
                    //     name: 'Definir servicio',
                    //     permission: [],
                    //     icon: 'plus-square',
                    //     isSection: false,
                    //     isCrud: true,
                    //     link: '/services-definition/create',
                    //     sections: [],
                    //     subsection: []
                    // },
                ]
            }

        ]
    },
    {
        id: 3,
        name: 'Administración del sistema',
        permission: [],
        permissionBoolean: true,
        icon: 'cogs',
        isSection: true,
        link: '',
        sections: [
            '/dashboard'
        ],
        subsection: [
            {
                id: 1,
                name: 'Usuarios',
                permission: [],
                icon: 'child',
                isSection: false,
                link: '/dashboard',
                sections: [],
                actions: [],
                subsection: [
                    // {
                    //     id: 1,
                    //     name: 'Otra seccion',
                    //     permission: [],
                    //     icon: 'plus-square',
                    //     isSection: false,
                    //     link: '/dashboard',
                    //     sections: [],
                    //     subsection: []
                    // },
                ]
            },

        ]
    },
];
