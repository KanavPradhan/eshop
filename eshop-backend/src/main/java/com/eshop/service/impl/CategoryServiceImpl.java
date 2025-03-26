package com.eshop.service.impl;

import com.eshop.entity.Category;
import com.eshop.exception.ResourceNotFoundException;
import com.eshop.repository.CategoryRepository;
import com.eshop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        return category;
    }

    @Override
    public Category saveCategory(Category newCategory) {
        return categoryRepository.save(newCategory);
    }

    @Override
    public Category updateCategory(Long id, Category updateCategory) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        category.setName(updateCategory.getName());
        category.setImage(updateCategory.getImage());
        return categoryRepository.save(category);
    }
    @Override
    public void deleteCategory(Long id) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        categoryRepository.deleteById(id);
    }
}
