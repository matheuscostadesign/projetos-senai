package com.AlugueFacil.AlugueFacil.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.AlugueFacil.AlugueFacil.models.Anuncio;

public interface AnuncioRepository extends CrudRepository<Anuncio, String> {
	Anuncio findById(long id);
	//List<Anuncio> findbyTitulo (String titulo);
}
