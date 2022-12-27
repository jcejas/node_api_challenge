import prisma from '../config/prisma.js';

const categoryService = {};

categoryService.findCategoriesService = async (id = 0) => {
    if (id != 0) {
        return await prisma.categories.findUnique({
            where: {
                id: parseInt(id),
            }
        });
    }
    return await prisma.categories.findMany();
}

categoryService.createCategoryService = async (body) => {
    return await prisma.categories.create(
        {
            data: body
        }
    );
}

categoryService.updateCategoryService = async (id, body) => {
    return await prisma.categories.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
}

categoryService.deleteCategoryService = async (id) => {
    return await prisma.categories.delete({
        where: {
            id: parseInt(id)
        }
    });
}

export { categoryService };