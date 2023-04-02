package com.pdf.library.repository;

import com.pdf.library.model.FavoriteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteModel, UUID> {
}
