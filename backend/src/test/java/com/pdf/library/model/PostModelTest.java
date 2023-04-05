package com.pdf.library.model;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class PostModelTest {

    @Test
    public void canCreatePost(){
        //Given
        FileModel testFile = new FileModel();
        FavoriteModel testFavorite = new FavoriteModel();
        UserModel testUser = new UserModel();
        PostModel testPost = new PostModel(
                "title",
                0L,
                100L,
                "100 MB",
                testFile,
                testUser,
                List.of(testFavorite),
                java.time.LocalDateTime.now(),
                java.time.LocalDateTime.now()

        );


        //Then
        assertThat(testPost.getId()).isNull();
        assertThat(testPost.getTitle()).isEqualTo("title");
        assertThat(testPost.getTotalDownloads()).isEqualTo(0L);
        assertThat(testPost.getPages()).isEqualTo(100L);
        assertThat(testPost.getSize()).isEqualTo("100 MB");
        assertThat(testPost.getFile()).isEqualTo(testFile);
        assertThat(testPost.getUser()).isEqualTo(testUser);
        assertThat(testPost.getFavorites()).isEqualTo(List.of(testFavorite));
        assertThat(testPost.getCreatedAt()).isNotNull();
        assertThat(testPost.getUpdatedAt()).isNotNull();



    }


}
