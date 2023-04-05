package com.pdf.library.model;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class FavoriteModelTest {

    @Test
    public void canCreateFavorite(){

        // Given
        UserModel testUser = new UserModel();
        PostModel testPost = new PostModel();

        FavoriteModel testFavorite = new FavoriteModel(
                testUser,
                testPost,
                java.time.LocalDateTime.now(),
                java.time.LocalDateTime.now()
        );

        //Then
        assertThat(testFavorite.getUser()).isEqualTo(testUser);
        assertThat(testFavorite.getPost()).isEqualTo(testPost);
        assertThat(testFavorite.getCreatedAt()).isNotNull();
        assertThat(testFavorite.getUpdatedAt()).isNotNull();

    }

}