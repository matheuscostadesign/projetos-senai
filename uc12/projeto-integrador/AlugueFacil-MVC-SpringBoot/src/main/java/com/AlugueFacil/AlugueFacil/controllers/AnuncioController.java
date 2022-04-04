package com.AlugueFacil.AlugueFacil.controllers;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.AlugueFacil.AlugueFacil.models.Anuncio;
import com.AlugueFacil.AlugueFacil.repository.AnuncioRepository;

@Controller
public class AnuncioController {
	
	private AnuncioRepository ar;

	@RequestMapping(value = "/cadastrarAnuncio", method = RequestMethod.GET)
	public String form() {
		return "anuncio/formAnuncio";
	}
	
	@RequestMapping(value = "/cadastrarAnuncio", method = RequestMethod.POST)
	public String form(@Valid Anuncio anuncio, BindingResult result, RedirectAttributes attributes ) {
		
		if(result.hasErrors()) {
			attributes.addFlashAttribute("mensagem", "Verifique os campos...");
			return "redirect:/cadastrarAnuncio";
		}
		
		ar.save(anuncio);
		attributes.addFlashAttribute("mensagem", "Anuncio cadastrado com sucesso!");
		return "redirect:/cadastrarAnuncio";
	}

}
