package net.att.oah.servlet.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api")
public class DadJokesController {
    @GetMapping("/dadjoke1")
    public String dadJoke1() {
        return "Justice is a dish best served cold, if it were served warm...";
    }

    @GetMapping("/dadjoke1/punchline")
    public String punchline1() {
        return "it would be just water.";
    }

    @GetMapping("/dadjoke2")
    public String dadJoke2() {
        return "What do you call a bear with no teeth?";
    }

    @GetMapping("/dadjoke2/punchline")
    public String punchline2() {
        return "A gummy bear.";
    }
}
