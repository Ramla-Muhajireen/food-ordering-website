package com.fastfood.ecommerce.service.impl;

import com.fastfood.ecommerce.entity.Dish;
import com.fastfood.ecommerce.repository.DishRepository;
import com.fastfood.ecommerce.service.DishService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishServiceImpl implements DishService {

    private final DishRepository dishRepository;

    public DishServiceImpl(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @Override
    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }

    @Override
    public Dish saveDish(Dish dish) {
        return dishRepository.save(dish);
    }

    @Override
    public Dish updateDish(int id, String dishName, double dishCost, int quantity, String image) {
        Dish dish = dishRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Dish not found with id: " + id));

        if (dishName != null && !dishName.isEmpty()) dish.setDishName(dishName);
        if (dishCost > 0) dish.setDishCost(dishCost);
        if (quantity > 0) dish.setQuantity(quantity);
        if (image != null && !image.isEmpty()) dish.setImage(image);

        return dishRepository.save(dish);
    }

    @Override
    public void deleteDish(int id) {
        if (!dishRepository.existsById(id)) {
            throw new RuntimeException("Dish not found with id: " + id);
        }
        dishRepository.deleteById(id);
    }
}
