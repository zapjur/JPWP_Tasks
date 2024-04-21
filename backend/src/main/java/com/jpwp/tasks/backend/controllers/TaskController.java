package com.jpwp.tasks.backend.controllers;


import com.jpwp.tasks.backend.entities.Task;
import com.jpwp.tasks.backend.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskRepository taskRepository;

    @GetMapping
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        taskRepository.save(task);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> changeTaskStatus(@PathVariable Long id) {
        Task task = taskRepository.findById(id).orElseThrow();
        task.setDone(!task.isDone());
        taskRepository.save(task);
        return ResponseEntity.ok(task);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Task> editTask(@PathVariable Long id, @RequestBody Task task) {
        Task taskToEdit = taskRepository.findById(id).orElseThrow();
        taskToEdit.setTitle(task.getTitle());
        taskToEdit.setDescription(task.getDescription());
        taskRepository.save(taskToEdit);
        return ResponseEntity.ok(taskToEdit);
    }

}
