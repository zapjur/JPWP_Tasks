package com.jpwp.tasks.backend.config;

import com.jpwp.tasks.backend.entities.Task;
import com.jpwp.tasks.backend.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LoadSeedData implements CommandLineRunner {

    private final TaskRepository taskRepository;
    @Override
    public void run(String... args) throws Exception {
        loadSeedData();
    }

    private void loadSeedData(){
        if(taskRepository.count() == 0){
            Task task1 = new Task("Donos 1", "Zanieść pączki na królewską");
            Task task2 = new Task("Donos 2", "Zjeść makowca z komendantem");
            Task task3 = new Task("Donos 3", "Wsiąć przed zajęciami do opla insignia i donieść na kolegę z grupy ćwiczeniowej", true);

            taskRepository.save(task1);
            taskRepository.save(task2);
            taskRepository.save(task3);
        }
    }
}
