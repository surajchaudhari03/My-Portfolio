import { defineType } from "sanity";

export default defineType({
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Project Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project Image'
        },
        {
            name: 'githubUrl',
            type: 'string',
            title: 'GitHib URL'
        },
        {
            name: 'projectUrl',
            type: 'string',
            title: 'Project URL'
        },
        {
            name: 'technologies',
            type: 'array',
            title: 'Technologies Used',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name of technology used'
                        },
                        {
                            name: 'class',
                            type: 'string',
                            title: 'Icon'
                        }
                    ]
                }
            ]
        }
    ]
})