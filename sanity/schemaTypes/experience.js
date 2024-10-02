import { defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'company',
            type: 'string',
            title: 'Company Name'
        },
        {
            name: 'duration',
            type: 'string',
            title: 'Duration'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        }

    ]
})