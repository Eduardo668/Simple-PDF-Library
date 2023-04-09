package com.pdf.library.repository;

import com.pdf.library.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserModel, UUID> {

    @Modifying
    @Query("DELETE FROM UserModel u WHERE u = ?1")
    UserModel deleteUserModel(UserModel deletedUser);

}
