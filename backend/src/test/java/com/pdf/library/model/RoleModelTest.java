package com.pdf.library.model;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class RoleModelTest {

    @Test
    public void canCreateRole(){

        //Given
        RoleModel testRole = new RoleModel(
                "ROLE",
                java.time.LocalDateTime.now(),
                java.time.LocalDateTime.now()
        );

        //Then
        assertThat(testRole.getName()).isEqualTo("ROLE");
        assertThat(testRole.getCreatedAt()).isNotNull();
        assertThat(testRole.getUpdatedAt()).isNotNull();


    }


}