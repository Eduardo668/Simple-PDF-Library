package com.pdf.library.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@ToString
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username", "email"})
})
public class UserModel implements Serializable {

    private static final long serialVersionUID = 12_345_091_123L;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Size(max = 50)
    @Column(unique = true)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Column(unique = true)
    private String email;

    @NotBlank
    @Size(max = 100)
    private String password;

    @Column(columnDefinition = "integer default 0")
    private Long totalDownloads;

    private List<UUID> favoritePosts;

    // orphanRemovel significa que quando o Post não estiver relacionado com o user ele sera deletado
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PostModel> postFiles;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<RoleModel> roles;

    @OneToMany(mappedBy = "user")
    private List<FavoriteModel> favorites;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;


}
