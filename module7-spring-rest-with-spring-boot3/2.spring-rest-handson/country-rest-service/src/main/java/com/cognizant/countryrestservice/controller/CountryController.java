package com.cognizant.countryrestservice.controller;

import com.cognizant.countryrestservice.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private Country india;

    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("START");

        LOGGER.info("END");

        return india;

    }

}