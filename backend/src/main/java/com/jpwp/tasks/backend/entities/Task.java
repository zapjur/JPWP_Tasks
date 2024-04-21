package com.jpwp.tasks.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private boolean isDone;

    public Task(String title, String description, boolean isDone) {
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }

    public Task(String title, String description) {
        this.title = title;
        this.description = description;
        this.isDone = false;
    }
}