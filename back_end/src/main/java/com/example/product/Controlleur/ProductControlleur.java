package com.example.product.Controlleur;
import com.example.product.Modele.Product;
import com.example.product.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class ProductControlleur {
    @Autowired
    ProductService productService;
    @RequestMapping(value="/createProduct", method= RequestMethod.POST)
    public Product createProduct(@RequestBody Product product) { return productService.createProduct(product);
    }
    @RequestMapping(value="/getProduct", method=RequestMethod.GET)
    public List<Product> readProductS() { return productService.getProduct();
    }
    @RequestMapping(value="/updateProduct/{ProductID}", method=RequestMethod.PUT)
    public Product updateProduct (@PathVariable(value = "ProductID") Long id, @RequestBody Product productDetail) {
        return productService.updateProduct(id, productDetail);
    }
    @RequestMapping(value="/deleteProduct/{ProductID}", method=RequestMethod.DELETE)
    public String deleteProducts(@PathVariable(value = "ProductID") Long id) { return productService.deleteProduct(id);
    }
}
