package com.pdf.library.service.user_service.edit_user_strategy;

import com.pdf.library.model.UserModel;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
public class EditUsernameTest {

    private final EditUsername editUsername = new EditUsername();

    @Test
    public void canEditEmail(){
        //Given
        String originalUsername = "original username";
        String newUsername = "new username";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setUsername(originalUsername);
        editedUser.setUsername(newUsername);
        editUsername.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getUsername()).isEqualTo(newUsername);

    }


    @Test
    public void canNotEditUsernameIfIsNull(){
        //Given
        String originalUsername = "original username";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setUsername(originalUsername);
        editUsername.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getUsername()).isEqualTo(originalUsername);
    }

    @Test
    public void canNotEditUsernameIfIsEmptyString(){
        //Given
        String originalUsername = "original username";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setUsername(originalUsername);
        editedUser.setUsername("");
        editUsername.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getUsername()).isEqualTo(originalUsername);
    }

    @Test
    public void canNotEditUsernameIfIsTheOriginalUsername(){
        //Given
        String originalUsername = "original username";
        UserModel user = new UserModel();
        UserModel editedUser = new UserModel();
        Optional<UserModel> userData = Optional.of(user);

        // When
        user.setUsername(originalUsername);
        editedUser.setUsername(originalUsername);
        editUsername.editUser(userData, editedUser);


        // Then
        assertThat(userData.get().getUsername()).isEqualTo(originalUsername);
    }


}