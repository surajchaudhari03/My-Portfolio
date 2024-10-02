import { defineType } from "sanity";

export default defineType({
    name: 'certificate',
    type: 'document',
    title: 'Certificate',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Name of Certificate'
        },
        {
            name: 'url',
            type: 'string',
            title: 'Link of Certificate'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Icon of Certification'
        },
        {
            name: 'platform',
            type: 'string',
            title: 'Certification Platform'
        }
    ]
})