package com.cognizant.countryrestservice.config;

import com.cognizant.countryrestservice.model.Country;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CountryConfig {

    @Bean
    public Country india() {
        return new Country("IN", "India");
    }

}