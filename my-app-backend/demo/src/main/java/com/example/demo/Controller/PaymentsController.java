package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.PaymentsModel;
import com.example.demo.Service.PaymentsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class PaymentsController {

    @Autowired
    public PaymentsService service;
      
      @GetMapping("/getpayment")
      public List<PaymentsModel> getPayment() {
          return service.getPayment();
      }

      @PostMapping("/addpayment")
      public String addPayment(@RequestBody PaymentsModel model) {
          service.addPayment(model);
          return "Payment added";
      }
      
      
}
