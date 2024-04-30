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
            Task task1 = new Task("Naprawić kostkę", "Ściągnąć kostkę brukową, wyciąć korzenie i ułożyć ją z powrotem");
            Task task2 = new Task("Zgrabić las", "Zgrabić opadłe liście i gałęzie w lesie, a następnie wywieźć wszystko Ursusem do dziury");
            Task task3 = new Task("Skosić trawę", "Skosić trawę i wywieźć skoszoną trawę Ursusem do dziury", true);

            taskRepository.save(task1);
            taskRepository.save(task2);
            taskRepository.save(task3);
        }
    }
}
