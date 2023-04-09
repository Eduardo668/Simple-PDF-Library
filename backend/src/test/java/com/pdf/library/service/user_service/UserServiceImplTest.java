package com.pdf.library.service.user_service;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.pdf.library.exceptions.DeletionException;
import com.pdf.library.exceptions.RegistrationException;
import com.pdf.library.exceptions.UpdatingException;
import com.pdf.library.exceptions.UserNotFoundException;
import com.pdf.library.model.UserModel;
import com.pdf.library.repository.UserRepository;
import com.pdf.library.service.user_service.edit_user_strategy.EditEmail;
import com.pdf.library.service.user_service.edit_user_strategy.EditPassword;
import com.pdf.library.service.user_service.edit_user_strategy.EditUsername;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.DataAccessException;

import java.util.Optional;
import java.util.UUID;


// Shoud use mockito for dependency injection and mock
@ExtendWith(MockitoExtension.class) // Shoud use mockito for dependency injection and mock
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private DataAccessException dataAccessException;

    @Mock
    private UserNotFoundException userNotFoundException;

    // Allow we can use the UserServiceImpç with the mocked userRepository;
    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private EditUsername editUsername;

    @Mock
    private EditEmail editEmail;

    @Mock
    private EditPassword editPassword;


    private UserModel testUser;


    @BeforeEach
    public void setup(){
        testUser = new UserModel(
                "username",
                "example@email.com",
                "password"
        );
        testUser.setId(UUID.fromString("c4d71876-d6dc-11ed-afa1-0242ac120002"));
    }

    // Register TEST
    @Test
    public void canRegisterUser(){
        // This set that the method save from userRepository must always return testUser when called
        when(userRepository.save(any(UserModel.class))).thenReturn(testUser);

        UserModel newUser = userService.registerUser(testUser);

        assertThat(newUser).isNotNull();
        assertThat(newUser.getUsername()).isEqualTo("username");
        assertThat(newUser.getEmail()).isEqualTo("example@email.com");
        assertThat(newUser.getPassword()).isEqualTo("password");
    }
    @Test
    public void canThrowsRegisterException(){
        when(userRepository.save(any(UserModel.class))).thenThrow(dataAccessException);

        assertThatThrownBy(()->userService.registerUser(testUser))
                .isInstanceOf(RegistrationException.class)
                .hasMessageContaining("An error occurred while trying registering user, ERROR: ");
    }

    // EditProfile TEST
    @Test
    public void canEditUserProfile(){
        // Given
        UserModel editedUser = new UserModel();
        editedUser.setUsername("UserName");
        editedUser.setEmail("email@example.com");
        editedUser.setPassword("PassWord");

        // When
        when(userRepository.save(any(UserModel.class))).thenReturn(editedUser);
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.of(testUser));
        UserModel updatedUser = userService.editUserProfile(editedUser, UUID.fromString("c4d71876-d6dc-11ed-afa1-0242ac120002"));

        //Then
        assertThat(updatedUser).isNotNull();
        assertThat(updatedUser.getUsername()).isEqualTo("UserName");
        assertThat(updatedUser.getEmail()).isEqualTo("email@example.com");
        assertThat(updatedUser.getPassword()).isEqualTo("PassWord");
    }
    @Test
    public void canThrowsUserNotFoundExceptionWhenEditUserProfile(){
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.empty());

        assertThatThrownBy(()->userService.editUserProfile(new UserModel(), UUID.randomUUID()))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessageContaining("This user doesn't exists");

    }
    @Test
    public void canThrowUpdatingException(){
        when(userRepository.save(any(UserModel.class))).thenThrow(dataAccessException);
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.of(testUser));
        assertThatThrownBy(()->userService.editUserProfile(new UserModel(), UUID.randomUUID()))
                .isInstanceOf(UpdatingException.class)
                .hasMessageContaining("An error occurred while trying to update a user profile, ERROR: ");
    }

    // Delete user TEST
    @Test
    public void canDeleteUser(){
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.of(testUser));
        when(userRepository.deleteUserModel(any(UserModel.class))).thenReturn(testUser);

        UserModel deletedUser = userService.deleteUser(UUID.randomUUID());

        assertThat(deletedUser).isNotNull();
        assertThat(deletedUser).isEqualTo(testUser);
    }
    @Test
    public void canThrowsUserNotFoundExceptionWhenDeleteUser(){
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.empty());

        assertThatThrownBy(()->userService.deleteUser(UUID.randomUUID()))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessageContaining("This user doesn't exists");
    }
    @Test
    public void canThrowsDeletionException(){
        when(userRepository.findById(any(UUID.class))).thenReturn(Optional.of(testUser));
        when(userRepository.deleteUserModel(any(UserModel.class))).thenThrow(dataAccessException);

        assertThatThrownBy(()-> userService.deleteUser(UUID.randomUUID()))
                .isInstanceOf(DeletionException.class)
                .hasMessageContaining("An error occurred while trying to delete a user, ERROR: ");
    }

}
