package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class EditUsername implements EditUserStrategy {

    @Override
    public void editUser(Optional<UserModel> userData, UserModel editedUser) {
        if (editedUser.getUsername() == null ||
                editedUser.getUsername().equals("") ||
                editedUser.getUsername().equals(userData.get().getUsername())){
            return;

        } else {
            userData.get().setUsername(editedUser.getUsername());
        }
    }

}
