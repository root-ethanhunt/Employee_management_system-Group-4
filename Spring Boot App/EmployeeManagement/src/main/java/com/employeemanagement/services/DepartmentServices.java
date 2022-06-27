package com.employeemanagement.services;

import com.employeemanagement.models.Department;

import java.util.List;
import java.util.Optional;

public interface DepartmentServices {
    List<Department> retrieveDept();

    Optional<Department> getDept(int deptId);

    Department saveDept(Department department);

    void deleteDept(int deptId);

    void updateDept(Department department);

    boolean findDept(int deptId);
}
