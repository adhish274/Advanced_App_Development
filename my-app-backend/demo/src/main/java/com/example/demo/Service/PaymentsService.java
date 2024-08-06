package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.PaymentsModel;
import com.example.demo.Repository.PaymentsRepository;

@Service
public class PaymentsService {
     @Autowired
     public PaymentsRepository repo;

     public List<PaymentsModel> getPayment(){
        return repo.findAll();
     }

     public String addPayment(PaymentsModel obj){
        repo.save(obj);
        return "Payments added";
     }
}
