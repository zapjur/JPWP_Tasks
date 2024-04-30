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

}
