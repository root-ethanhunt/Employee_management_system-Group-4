package com.employeemanagement.services;

import com.employeemanagement.models.Project;
import com.employeemanagement.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectServices {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Project> retrieveProject() {
        return projectRepository.findAll();
    }

    @Override
    public Optional<Project> getProject(int projectId) {
        return projectRepository.findById(projectId);
    }

    @Override
    public Project saveProject(Project project) {
        return projectRepository.saveAndFlush(project);
    }

    @Override
    public void deleteProject(int projectId) {
        projectRepository.deleteById(projectId);
    }

    @Override
    public void updateProject(Project project) {
        projectRepository.save(project);
    }

    @Override
    public boolean findProject(int projectId) {
        return projectRepository.existsById(projectId);
    }
}
