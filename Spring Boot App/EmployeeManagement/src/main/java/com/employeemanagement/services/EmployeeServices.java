package com.employeemanagement.services;

import com.employeemanagement.models.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeServices {
    List<Employee> retrieveEmployees();

    Optional<Employee> getEmployee(int employeeId);

    Employee saveEmployee(Employee employee);

    void deleteEmployee(int employeeId);

    void updateEmployee(Employee employee);

    boolean findEmployee(int employeeId);

    Employee login(String username, String password);

    List<Employee> findByProjectName(String projectName);

    List<Employee> findByDepartmentName(String deptName);
}
