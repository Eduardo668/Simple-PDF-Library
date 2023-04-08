package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface EditUserStrategy {
    void editUser(Optional<UserModel> userData, UserModel editedUser);

}
