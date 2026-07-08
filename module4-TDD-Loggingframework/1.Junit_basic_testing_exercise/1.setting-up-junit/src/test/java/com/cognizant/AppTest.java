package com.cognizant;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AppTest {

    @Test
    public void testAddition() {

        int a = 5;
        int b = 5;

        int result = a + b;

        assertEquals(10, result);
    }
}