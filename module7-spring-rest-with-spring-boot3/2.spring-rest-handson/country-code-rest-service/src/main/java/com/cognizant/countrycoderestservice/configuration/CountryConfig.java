package com.cognizant.countrycoderestservice.configuration;

import com.cognizant.countrycoderestservice.model.Country;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class CountryConfig {

    @Bean
    public List<Country> countryList() {

        List<Country> countries = new ArrayList<>();

        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States"));
        countries.add(new Country("AU", "Australia"));
        countries.add(new Country("JP", "Japan"));
        countries.add(new Country("CN", "China"));

        return countries;
    }

}