package com.fastfood.ecommerce.controller;

import com.fastfood.ecommerce.entity.Dish;
import com.fastfood.ecommerce.service.DishService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/dishes")
@CrossOrigin(origins = "*")
public class DishController {

    private final DishService dishService;

    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    // GET all dishes
    @GetMapping
    public List<Dish> getAllDishes() {
        return dishService.getAllDishes();
    }

    // POST: add a new dish with image
    @PostMapping
    public Dish addDish(@RequestParam("dishName") String dishName,
                        @RequestParam("dishCost") double dishCost,
                        @RequestParam("quantity") int quantity,
                        @RequestParam("imageFile") MultipartFile imageFile) throws IOException {
    	if (imageFile == null || imageFile.isEmpty()) {
    	    throw new RuntimeException("Image file is missing");
    	}

    	

        // Ensure uploads folder exists
    	String uploadDir = System.getProperty("user.dir") + "/uploads";
    	File dir = new File(uploadDir);
    	if (!dir.exists()) {
    	    dir.mkdirs();
    	}


        // Save image
        String filename = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
        File file = new File(dir, filename);
        imageFile.transferTo(file);

        // Create Dish object
        Dish dish = new Dish();
        dish.setDishName(dishName);
        dish.setDishCost(dishCost);
        dish.setQuantity(quantity);
        dish.setImage(filename);

        // Save via SERVICE
        return dishService.saveDish(dish);
    }

    // PUT: update an existing dish by ID
    @PutMapping("/{id}")
    public Dish updateDish(@PathVariable("id") int id,
                           @RequestParam(value = "dishName", required = false) String dishName,
                           @RequestParam(value = "dishCost", defaultValue = "0") double dishCost,
                           @RequestParam(value = "quantity", defaultValue = "0") int quantity,
                           @RequestParam(value = "imageFile", required = false) MultipartFile imageFile) throws IOException {

        String filename = null;
        if (imageFile != null && !imageFile.isEmpty()) {
            String uploadDir = System.getProperty("user.dir") + "/uploads";
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();
            filename = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
            imageFile.transferTo(new File(dir, filename));
        }

        return dishService.updateDish(id, dishName, dishCost, quantity, filename);
    }

    // DELETE: remove a dish by ID
    @DeleteMapping("/{id}")
    public org.springframework.http.ResponseEntity<Void> deleteDish(@PathVariable("id") int id) {
        dishService.deleteDish(id);
        return org.springframework.http.ResponseEntity.noContent().build();
    }
}

