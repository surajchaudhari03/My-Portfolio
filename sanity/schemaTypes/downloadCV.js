import { defineType } from 'sanity'

export default defineType({
    name: 'downloadCV',
    type: 'document',
    title: 'Download CV',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'CV Name or Title'
        },
        {
            name: 'file',
            type: 'file',
            title: 'File'
        }
    ]
})