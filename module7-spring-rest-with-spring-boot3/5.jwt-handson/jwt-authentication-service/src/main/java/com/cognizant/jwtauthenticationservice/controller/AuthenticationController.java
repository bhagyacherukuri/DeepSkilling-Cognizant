package com.cognizant.jwtauthenticationservice.controller;

import com.cognizant.jwtauthenticationservice.model.AuthenticationResponse;
import com.cognizant.jwtauthenticationservice.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(HttpServletRequest request) {

        // Read Authorization Header
        String authorizationHeader = request.getHeader("Authorization");

        // Remove "Basic "
        String encodedCredentials = authorizationHeader.substring(6);

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // username:password
        String[] values = credentials.split(":");

        String username = values[0];

        // Generate JWT
        String token = JwtUtil.generateToken(username);

        return new AuthenticationResponse(token);
    }
}