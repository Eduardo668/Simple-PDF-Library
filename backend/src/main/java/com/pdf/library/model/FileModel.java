package com.pdf.library.model;

import com.google.common.annotations.VisibleForTesting;
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

@Entity
@Data
@NoArgsConstructor
@ToString
public class FileModel implements Serializable {

    private static final long serialVersionUID = 12313213231L;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Size(max = 300)
    private String path;

    @OneToOne(mappedBy = "file")
    private PostModel postModel;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Constructor for test
    @VisibleForTesting
    public FileModel(String name, String path, PostModel postModel,
                     LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.name = name;
        this.path = path;
        this.postModel = postModel;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
