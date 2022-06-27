package com.employeemanagement.controllers;

import com.employeemanagement.models.Department;
import com.employeemanagement.models.Project;
import com.employeemanagement.repositories.ProjectRepository;
import com.employeemanagement.services.DepartmentServiceImpl;
import com.employeemanagement.services.ProjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/projects")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectServiceImpl projectService;
    
    @Autowired
    private ProjectRepository repo;

    @GetMapping("/")
    public List<Project> list() {
        try {
            return projectService.retrieveProject();
        } catch(Exception e) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    public Project get(@PathVariable int id) {
        try {
            return projectService.getProject(id).get();
        } catch(Exception e) {
            return null;
        }
    }

    @PostMapping("/")
    public String create(@RequestBody Project project) {
        try {
            if(projectService.findProject(project.getProjectId())) {
                return "Project with this id already exists";
            }
            projectService.saveProject(project);
            return "Project created";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    @PutMapping("/")
    public String update( @RequestBody Project project) {
        try {
            if(projectService.findProject(project.getProjectId())) {
                project.setProjectId(project.getProjectId());
                projectService.updateProject(project);
                return "Project information updated";
            }
            else {
            	
            	return "Project with the given id not found";
            }
        } catch(Exception e) {
            return "Something went wrong!";
        }
    }
    
    @PutMapping("/updateEmpCount/{cid}/{pid}")
    public void updateEmpCount(@PathVariable int cid, @PathVariable int pid) {
        repo.updateEmpCount(cid, pid);
    }
    
    @GetMapping("/totalCount")
	public int count() {
			return repo.totalCount();
	}

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        try {
            if (projectService.findProject(id)) {
                projectService.deleteProject(id);
                return "Project deleted!";
            }
            return "Project with the given id not found";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }
}
