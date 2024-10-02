import { defineType } from "sanity";

export default defineType({
    name: 'contact',
    type: 'document',
    title: 'Contact',
    fields: [
        {
            name: 'mydetails',
            type: 'string',
            title: 'My Details'
        },
        {
            name: 'details',
            type: 'array',
            title: 'Details',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            title: 'Detail Type'
                        },
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Detail'
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