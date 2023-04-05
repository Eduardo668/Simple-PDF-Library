package com.pdf.library.model;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class FileModelTest {

    @Test
    public void canCreateFile(){

        //Given
        PostModel testPost = new PostModel();

        FileModel testFile = new FileModel(
                "filename",
                "path",
                testPost,
                java.time.LocalDateTime.now(),
                java.time.LocalDateTime.now()
        );

        // Then
        assertThat(testFile.getName()).isEqualTo("filename");
        assertThat(testFile.getPath()).isEqualTo("path");
        assertThat(testFile.getPostModel()).isEqualTo(testPost);
        assertThat(testFile.getCreatedAt()).isNotNull();
        assertThat(testFile.getUpdatedAt()).isNotNull();


    }


}