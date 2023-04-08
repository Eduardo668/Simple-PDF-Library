package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

public class EditPasswordTest {

    private final EditPassword editPassword = new EditPassword();

    @Test
    public void canEditPassword(){
        //Given
        String originalPassword = "original password";
        String newPassword = "new password";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setPassword(originalPassword);
        editedUser.setPassword(newPassword);
        editPassword.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getPassword()).isEqualTo(newPassword);

    }

    @Test
    public void canNotEditPasswordIfIsNull(){
        //Given
        String originalPassword = "original password";
        String newPassword = "new password";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setPassword(originalPassword);
        editPassword.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getPassword()).isEqualTo(originalPassword);

    }

    @Test
    public void canNotEditPasswordIfIsEmptyString(){
        //Given
        String originalPassword = "original password";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setPassword(originalPassword);
        editedUser.setPassword("");
        editPassword.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getPassword()).isEqualTo(originalPassword);

    }

    @Test
    public void canNotEditPasswordIfIsTheOriginalPassword(){
        //Given
        String originalPassword = "original password";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setPassword(originalPassword);
        editedUser.setPassword(originalPassword);
        editPassword.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getPassword()).isEqualTo(originalPassword);

    }


}
