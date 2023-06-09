package com.pdf.library.model;

import com.google.common.annotations.VisibleForTesting;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@ToString
public class PostModel implements Serializable {

    private static final long serialVersionUID = 876123123L;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Size(max = 100)
    private String title;

    @NotNull
    @Column(columnDefinition = "integer default 0")
    private Long totalDownloads;

    @NotNull
    private Long pages;

    @NotBlank
    @Size(max = 50)
    private String size;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private FileModel file;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserModel user;

    @OneToMany(mappedBy = "post")
    private List<FavoriteModel> favorites;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Constructor for testing
    @VisibleForTesting
    public PostModel(String title, Long totalDownloads, Long pages, String size,
                     FileModel file, UserModel user, List<FavoriteModel> favorites,
                     LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.title = title;
        this.totalDownloads = totalDownloads;
        this.pages = pages;
        this.size = size;
        this.file = file;
        this.user = user;
        this.favorites = favorites;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
