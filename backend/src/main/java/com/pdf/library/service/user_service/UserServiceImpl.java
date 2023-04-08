package com.pdf.library.service.user_service;

import com.pdf.library.exceptions.DeletionException;
import com.pdf.library.exceptions.RegistrationException;
import com.pdf.library.exceptions.UpdatingException;
import com.pdf.library.exceptions.UserNotFoundException;
import com.pdf.library.model.UserModel;
import com.pdf.library.repository.UserRepository;
import com.pdf.library.service.user_service.edit_user_strategy.EditEmail;
import com.pdf.library.service.user_service.edit_user_strategy.EditPassword;
import com.pdf.library.service.user_service.edit_user_strategy.EditUsername;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final EditUsername editUsername;
    private final EditEmail editEmail;
    private final EditPassword editPassword;

    @Override
    public UserModel registerUser(UserModel newUser) {
        try{
            return userRepository.save(newUser);
        } catch(DataAccessException error){
          throw new RegistrationException("An error occurred while trying registering user, ERROR: "+error);
        }
    }

    @Override
    public List<UserModel> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserModel editUserProfile(UserModel editedData, UUID userId) {
        try{
            Optional<UserModel> userData = userRepository.findById(userId);
            if (userData.isEmpty()){
                throw new UserNotFoundException("This doesn't exists");
            } else {
                editUsername.editUser(userData, editedData);
                editEmail.editUser(userData, editedData);
                editPassword.editUser(userData, editedData);

                return userRepository.save(userData.get());
            }

        }catch (DataAccessException error){
            throw new UpdatingException("An error occurred while trying to update a user profile, ERROR: "+ error);
        }
    }

    @Override
    public void deleteUser(UUID userId) {
        try{
            Optional<UserModel> userData = userRepository.findById(userId);
            if(userData.isEmpty()){
                throw new UserNotFoundException("This doesn't exists");
            }

            userRepository.delete(userData.get());
        } catch (DataAccessException error){
            throw new DeletionException("An error occurred while trying to delete a user, ERROR: "+error);
        }
    }
}
