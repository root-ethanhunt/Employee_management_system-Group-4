package com.employeemanagement.services;

import com.employeemanagement.models.Department;
import com.employeemanagement.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentServices {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public List<Department> retrieveDept() {
        return departmentRepository.findAll();
    }

    @Override
    public Optional<Department> getDept(int deptId) {
        return departmentRepository.findById(deptId);
    }

    @Override
    public Department saveDept(Department department) {
        return departmentRepository.saveAndFlush(department);
    }

    @Override
    public void deleteDept(int deptId) {
        departmentRepository.deleteById(deptId);
    }

    @Override
    public void updateDept(Department department) {
        departmentRepository.save(department);
    }

    @Override
    public boolean findDept(int deptId) {
        return departmentRepository.existsById(deptId);
    }
}
