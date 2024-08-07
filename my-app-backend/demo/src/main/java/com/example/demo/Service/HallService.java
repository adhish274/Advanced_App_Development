package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.HallsRepository;
import com.example.demo.model.HallModel;

@Service
public class HallService {

    @Autowired
    public HallsRepository repo;

    //GET
    public List<HallModel> getHalls(){
        return repo.findAll();
    }

    public List<HallModel> getHallsbyCity(String city){
        return repo.findByCity(city);
    }

    //POST
    public String addHall(HallModel obj){
        repo.save(obj);
        return "added";
    }
}
