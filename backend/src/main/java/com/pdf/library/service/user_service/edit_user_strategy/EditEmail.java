package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class EditEmail implements EditUserStrategy {
    @Override
    public void editUser(Optional<UserModel> userData, UserModel editedUser) {
       if (editedUser.getEmail() == null ||
               editedUser.getEmail().equals("") ||
               editedUser.getEmail().equals(userData.get().getEmail())){
            return;

       } else {
           userData.get().setEmail(editedUser.getEmail());
       }
    }
}