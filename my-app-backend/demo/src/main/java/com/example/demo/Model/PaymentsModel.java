package com.example.demo.Model;

import jakarta.persistence.Entity;
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
public class PaymentsModel{
    
    @Id
    @Column(name = "Payment_id")
    private int id;
    private int Booking_id;
    private int Price;
    private String PaymentMethod;
    private String PaymentStatus;
    private String TransactionId;
    private int PaymentDate;


}

