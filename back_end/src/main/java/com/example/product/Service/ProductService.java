package com.example.product.Service;

import com.example.product.Modele.Product;
import com.example.product.Référentiel.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import org.springframework.stereotype.Service;
@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public Product createProduct (Product product){ return productRepository.save(product);}
    // READ
    public List<Product> getProduct() {
        return productRepository.findAll();
    }
    // DELETE
    public String deleteProduct (Long product_id) {
        productRepository.deleteById(product_id);
        return "Product deleted successfully";
    }
    // UPDATE
    public Product updateProduct (Long product_id, Product product) {
        Product pro = productRepository.findById(product_id).get();
        pro.setNomProduct(product.getNomProduct());
        pro.setPrixProduct(product.getPrixProduct());
        pro.setDescription(product.getDescription());
        return productRepository.save(pro);
    }
}
