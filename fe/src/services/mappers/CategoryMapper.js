class CategoryMapper {
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.category.id,
      name: persistenceCategory.category.name,
    };
  }
}

export default new CategoryMapper();
