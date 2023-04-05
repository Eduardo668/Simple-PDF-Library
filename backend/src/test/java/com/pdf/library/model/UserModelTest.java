package com.pdf.library.model;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class UserModelTest {

    @Test
    public void canCreateUser(){
        //Given
        PostModel testPost = new PostModel();
        RoleModel testRole = new RoleModel();
        FavoriteModel testFavorite = new FavoriteModel();

        UserModel testUser = new UserModel(
                "username",
                "example@email.com",
                "password",
                 0L,
                List.of(testPost),
                List.of(testRole),
                List.of(testFavorite),
                java.time.LocalDateTime.now(),
                java.time.LocalDateTime.now()

        );

        //Then
        assertThat(testUser.getId()).isNull();
        assertThat(testUser.getUsername()).isEqualTo("username");
        assertThat(testUser.getEmail()).isEqualTo("example@email.com");
        assertThat(testUser.getPassword()).isEqualTo("password");
        assertThat(testUser.getTotalDownloads()).isEqualTo(0L);
        assertThat(testUser.getFavorites()).isEqualTo(List.of(testFavorite));
        assertThat(testUser.getPosts()).isEqualTo(List.of(testPost));
        assertThat(testUser.getRoles()).isEqualTo(List.of(testRole));
        assertThat(testUser.getCreatedAt()).isNotNull();
        assertThat(testUser.getUpdatedAt()).isNotNull();


    }






}