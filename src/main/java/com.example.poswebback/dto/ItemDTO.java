package com.example.poswebback.dto;

import com.example.poswebback.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO extends Customer implements Serializable {
    private String code;
    private String description;
    private int qty;
    private double unitPrice;
}
