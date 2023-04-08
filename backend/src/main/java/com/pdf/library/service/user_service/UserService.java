package com.pdf.library.service.user_service;

import com.pdf.library.exceptions.RegistrationException;
import com.pdf.library.model.UserModel;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserModel registerUser(UserModel newUser) throws RegistrationException;
    List<UserModel> findAllUsers();
    UserModel editUserProfile(UserModel editedData, UUID userId);
    void deleteUser(UUID userId);


}
