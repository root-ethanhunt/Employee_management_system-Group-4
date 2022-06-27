package com.employeemanagement.services;

import com.employeemanagement.models.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectServices {
    List<Project> retrieveProject();

    Optional<Project> getProject(int projectId);

    Project saveProject(Project project);

    void deleteProject(int projectId);

    void updateProject(Project project);

    boolean findProject(int projectId);
}
