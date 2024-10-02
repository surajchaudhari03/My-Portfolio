import { defineType } from "sanity";

export default defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'categoryName',
            type: 'string',
            title: 'Category of Skills',            
        },
        {
            name: 'skillsItems',
            type: 'array',
            title: 'Skills in this category',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Skill Name'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Skill Image'
                        }
                    ]
                }
            ]
        }
    ]
});
