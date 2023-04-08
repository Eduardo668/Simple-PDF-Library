package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;



public class EditEmailTest {

    private final EditEmail editEmail = new EditEmail();

    @Test
    public void canEditEmail(){
        //Given
        String originalEmail = "original@email.com";
        String newEmail = "new@email.com";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setEmail(originalEmail);
        editedUser.setEmail(newEmail);
        editEmail.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getEmail()).isEqualTo(newEmail);

    }

    @Test
    public void canNotEditEmailIfIsNull(){
        //Given
        String originalEmail = "original@email.com";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();

        // When
        user.setEmail(originalEmail);
        Optional<UserModel> userData = Optional.of(user);
        editEmail.editUser(userData, editedUser);

        // Then
        assertThat(userData.get().getEmail()).isEqualTo(originalEmail);
    }

    @Test
    public void canNotEditEmailIfIsEmptyString(){
        //Given
        String originalEmail = "original@email.com";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setEmail(originalEmail);
        editedUser.setEmail("");
        editEmail.editUser(userData, editedUser);

        // Then
        assertThat(userData.get().getEmail()).isEqualTo(originalEmail);
    }

    @Test
    public void canNotEditEmailIfIsTheOriginalEmail(){
        //Given
        String originalEmail = "original@email.com";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setEmail(originalEmail);
        editedUser.setEmail(originalEmail);
        editEmail.editUser(userData, editedUser);

        // Then
        assertThat(userData.get().getEmail()).isEqualTo(originalEmail);
    }




}