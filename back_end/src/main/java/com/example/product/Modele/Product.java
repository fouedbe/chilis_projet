package com.example.product.Modele;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;
@Data
@Entity
@DynamicUpdate
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="product_id") private Long product_id;
    @Column(name="nomProduct") private String nomProduct;
    @Column(name="prixProduct") private Float prixProduct;
    @Column(name="description") private String description;
    // Getter for product_id
    public Long getProductId() {
        return product_id;
    }

    // Setter for product_id
    public void setProductId(Long productId) {
        this.product_id= productId;
    }

    // Getter for nomProduct
    public String getNomProduct() {
        return nomProduct;
    }

    // Setter for nomProduct
    public void setNomProduct(String nomProduct) {
        this.nomProduct = nomProduct;
    }

    // Getter for prixProduct
    public Float getPrixProduct() {
        return prixProduct;
    }

    // Setter for prixProduct
    public void setPrixProduct(Float prixProduct) {
        this.prixProduct = prixProduct;
    }

    // Getter for description
    public String getDescription() {
        return description;
    }

    // Setter for description
    public void setDescription(String description) {
        this.description = description;
    }
}
