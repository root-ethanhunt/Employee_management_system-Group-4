package com.employeemanagement.services;

import com.employeemanagement.models.Employee;
import com.employeemanagement.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServicesImpl implements EmployeeServices {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> retrieveEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> getEmployee(int employeeId) {
        return employeeRepository.findById(employeeId);
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.saveAndFlush(employee);
    }

    @Override
    public void deleteEmployee(int employeeId) {
        employeeRepository.deleteById(employeeId);
    }

    @Override
    public void updateEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public boolean findEmployee(int employeeId) {
        return employeeRepository.existsById(employeeId);
    }

    @Override
    public Employee login(String username, String password) {
        return employeeRepository.findByUserPassword(username, password);
    }

    @Override
    public List<Employee> findByProjectName(String projectName) {
        return employeeRepository.findByProject_ProjectName(projectName);
    }

    @Override
    public List<Employee> findByDepartmentName(String deptName) {
        return employeeRepository.findByDepartment_DeptName(deptName);
    }
}
