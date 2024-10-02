import { defineType } from "sanity";

export default defineType({
    name: 'navigation',
    type: 'document',
    title: 'Navigation',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Navigation Menu Name'
        },
        {
            name: 'to',
            type: 'string',
            title: 'Navigation Menu Link'
        },
        {
            name: 'icon',
            type: 'string',
            title: 'Navigation Menu Icon'
        }
    ]
})