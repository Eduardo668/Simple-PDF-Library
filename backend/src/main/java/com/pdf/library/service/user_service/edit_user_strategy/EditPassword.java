package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;

import java.util.Optional;

public class EditPassword implements EditUserStrategy {
    @Override
    public void editUser(Optional<UserModel> userData, UserModel editedUser) {
        if (editedUser.getPassword() == null ||
                editedUser.getPassword().equals("") ||
                editedUser.getPassword().equals(userData.get().getPassword())){
            return;

        } else {
            userData.get().setPassword(editedUser.getPassword());
        }
    }
}
