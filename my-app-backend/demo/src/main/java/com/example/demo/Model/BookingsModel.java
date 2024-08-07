package com.example.demo.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int BookingId;

    @ManyToOne
    @JoinColumn(name = "user_id") // Foreign key column in the bookings table
    private User user; // Reference to the User who made the booking

    private int Hall_id;
    private int StartTime;
    private int EndTime;
    private int Price;
}
