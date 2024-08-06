package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HallModel {
    @Id
    @Column(name = "Hall_id")
    private int id;
    private String Hallname;
    private int Price;
    private int Capacity;
    private String Address;
    private String Description;
    private int Rating;

}
