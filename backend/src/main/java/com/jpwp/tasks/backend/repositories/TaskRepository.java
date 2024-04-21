package com.jpwp.tasks.backend.repositories;

import com.jpwp.tasks.backend.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
