import { defineType } from "sanity";

export default defineType ({
    name: 'about',
    type: 'document',
    title: 'About Details',
    fields: [
        {
            name: 'greeting',
            type: 'string',
            title: 'Greeting'
        },
        {
            name: 'name',
            type: 'string',
            title: 'My Name'
        },
        {
            name: 'roles',
            type: 'array',
            title: 'My Roles',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'role',
                            type: 'string',
                            title: 'Role'
                        }
                    ]
                }
            ]
        },
        {
            name: 'summary',
            type: 'array',
            title: 'Short Summary About Me',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'point',
                            type: 'string',
                            title: 'Description Point'
                        }
                    ]
                }
            ]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Profile Image'
        },
        {
            name: 'social',
            type: 'array',
            title: 'My Social Profiles',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'profileName',
                            type: 'string',
                            title: 'Social Platform Name'
                        },
                        {
                            name: 'url',
                            type: 'string',
                            title: 'URL'
                        },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon'
                        }
                    ]
                }
            ]
        }
    ]
})