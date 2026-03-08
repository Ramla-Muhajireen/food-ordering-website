package com.fastfood.ecommerce.service;

import com.fastfood.ecommerce.entity.Dish;
import java.util.List;

public interface DishService {
    List<Dish> getAllDishes();
    Dish saveDish(Dish dish);
    Dish updateDish(int id, String dishName, double dishCost, int quantity, String image);
    void deleteDish(int id);
}
