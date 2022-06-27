package com.employeemanagement.controllers;

import com.employeemanagement.models.Department;
import com.employeemanagement.repositories.DepartmentRepository;
import com.employeemanagement.services.DepartmentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/departments")
@CrossOrigin("*")
public class DepartmentController {

    @Autowired
    private DepartmentServiceImpl departmentService;
    
    @Autowired
    private DepartmentRepository repo;

    @GetMapping("/")
    public List<Department> list() {
        try {
            return departmentService.retrieveDept();
        } catch(Exception e) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    public Department get(@PathVariable int id) {
        try {
            return departmentService.getDept(id).get();
        } catch(Exception e) {
            return null;
        }
    }

    @PostMapping("/")
    public String create(@RequestBody Department department) {
        try {
            if(departmentService.findDept(department.getDeptId())) {
                return "Department with this id already exists";
            }
            departmentService.saveDept(department);
            return "Department created";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }

    @PutMapping("/")
    public String update(@RequestBody Department department) {
        try {
            if(departmentService.findDept(department.getDeptId())) {
                department.setDeptId(department.getDeptId());
                departmentService.updateDept(department);
                return "Department information updated";
            }
            return "Department with the given id not found";
        } catch(Exception e) {
            return "Something went wrong!";
        }
    }
    
    @PutMapping("/updateEmpCount/{cid}/{did}")
    public void updateEmpCount(@PathVariable int cid, @PathVariable int did) {
        repo.updateEmpCount(cid, did);
    }
    
    @GetMapping("/totalCount")
	public int count() {
			return repo.totalCount();
	}

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        try {
            if (departmentService.findDept(id)) {
                departmentService.deleteDept(id);
                return "Department deleted!";
            }
            return "Department with the given id not found";
        } catch (Exception e) {
            return "Something went wrong!";
        }
    }
}
