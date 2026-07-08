package com.cognizant.countrycoderestservice.service;

import com.cognizant.countrycoderestservice.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private List<Country> countryList;

    public Country getCountry(String code) {

        return countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

    }

}