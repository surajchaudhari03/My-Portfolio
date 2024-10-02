import { defineType } from "sanity";

export default defineType({
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        {
            name: 'type',
            type: 'string',
            title: 'Type of Education'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Name of Education'
        },
        {
            name: 'institution',
            type: 'string',
            title: 'University or Institute'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo Image'
        },
        {
            name: 'duration',
            type: 'string',
            title: 'Duration of Education'
        }
    ]
})