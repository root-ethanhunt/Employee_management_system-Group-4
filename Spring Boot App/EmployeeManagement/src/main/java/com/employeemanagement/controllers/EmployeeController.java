package com.employeemanagement.controllers;

import java.util.ArrayList;
import java.util.List;

import com.employeemanagement.services.EmployeeServicesImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employeemanagement.repositories.EmployeeRepository;
import com.employeemanagement.models.Employee;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeServicesImpl employeeServices;
	
	 @Autowired
	    private EmployeeRepository repo;
	
	@GetMapping("/")
	public List<Employee> list() {
		try {
			return employeeServices.retrieveEmployees();
		} catch(Exception e) {
			return new ArrayList<>();
		}
	}
	
	@GetMapping("/{id}")
	public Employee get(@PathVariable int id) {
		try {
			return employeeServices.getEmployee(id).get();
		} catch(Exception e) {
			return null;
		}
	}
	
	@GetMapping("/countDept/{id}")
	public ResponseEntity<Object> countByDept(@PathVariable("id") int id) {
		try {
			int count=repo.countByDept(id);
			return new ResponseEntity<Object>(count, HttpStatus.OK);
		}catch(Exception e) {
			System.out.println();
			return new ResponseEntity<Object>("Something went Wrong", HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/findByDept/{id}")
	public ResponseEntity<Object> findByDept(@PathVariable("id") int id) {
		try {
			List<Employee> ls=repo.findByDept(id);
			return new ResponseEntity<Object>(ls, HttpStatus.OK);
		}catch(Exception e) {
			System.out.println();
			return new ResponseEntity<Object>("Something went Wrong", HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/findIdByName/{name}")
	public ResponseEntity<Object> findIdByName(@PathVariable("name") String name) {
		try {
			int id=repo.findIdByName(name);
			return new ResponseEntity<Object>(id, HttpStatus.OK);
		}catch(Exception e) {
			System.out.println();
			return new ResponseEntity<Object>("Something went Wrong", HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/countProject/{id}")
	public ResponseEntity<Object> countByProject(@PathVariable("id") int id) {
		try {
			int count=repo.countByProject(id);
			return new ResponseEntity<Object>(count, HttpStatus.OK);
		}catch(Exception e) {
			System.out.println();
			return new ResponseEntity<Object>("Something went Wrong", HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/findByProject/{id}")
	public ResponseEntity<Object> findByProject(@PathVariable("id") int id) {
		try {
			List<Employee> ls=repo.findByProject(id);
			return new ResponseEntity<Object>(ls, HttpStatus.OK);
		}catch(Exception e) {
			System.out.println();
			return new ResponseEntity<Object>("Something went Wrong", HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/")
	public String create(@RequestBody Employee employee) {
		try {
			if(employeeServices.findEmployee(employee.getEid())) {
				return "Employee with this id already exists";
			}
			employeeServices.saveEmployee(employee);
			return "Employee created";
		} catch (Exception e) {
			return "Something went wrong!";
		}
	}
	
	@PutMapping("/")
	public String update(@RequestBody Employee employee) {
		try {
			if(employeeServices.findEmployee(employee.getEid())) {
				employee.setEid(employee.getEid());
				employeeServices.updateEmployee(employee);
				return "Employee information updated";
			}
			return "Employee with the given id not found";
		} catch(Exception e) {
			return "Something went wrong!";
		}
	}
	
	@GetMapping("/totalCount")
	public int count() {
			return repo.totalCount();
	}
	
	@PutMapping("/updatePassword/{pass}/{eid}")
	public String updatePassword(@PathVariable("pass") String pass, @PathVariable("eid") int eid) {
		try {
			if(employeeServices.findEmployee(eid)) {
				repo.updatePassword(pass, eid);
				return "Password update successfully";
			}
			else {
				
				return "Employee with the given id not found";
			}
		} catch(Exception e) {
			return "Something went wrong in password update!";
		}
	}
	
	
	
//	@PutMapping("/updateusername/{username}/{eid}")
//	public ResponseEntity<Object> updateUsername(@PathVariable("username") String username, @PathVariable("eid") int eid) {
//		
//		if(employeeServices.findEmployee(eid)) {
//			repo.updateUsername(username, eid);
//			return new ResponseEntity<Object>(username+" Update Successfully", HttpStatus.OK);
//		}else {
//			return new ResponseEntity<Object>("Employee with the given is is not found", HttpStatus.NOT_FOUND);
//		}
//		
//	}
	
	
	
	@DeleteMapping("delete/{id}")
	public String delete(@PathVariable int id) {
		try {
			if (employeeServices.findEmployee(id)) {
				employeeServices.deleteEmployee(id);
				return "Employee deleted!";
			}
			return "Employee with the given id not found";
		} catch (Exception e) {
			return "Something went wrong!";
		}
	}

	@PostMapping("/login/{username}/{password}")
	public ResponseEntity<Object> login(@PathVariable("username") String username, @PathVariable("password") String password) {
		Employee emp=employeeServices.login(username, password);
		if(emp!=null) {
			System.out.println(emp);
			return new ResponseEntity<Object>(emp, HttpStatus.OK);
		}else {
			System.out.println();
			return new ResponseEntity<Object>("Wrong UserName Password", HttpStatus.NOT_FOUND);
		}
		
	}
	
	

	@GetMapping("/by_project")
	public List<Employee> getEmployeesByProjectName(@PathVariable String projectName) {
		return employeeServices.findByProjectName(projectName);
	}

	@GetMapping("/by_department")
	public List<Employee> getEmployeesByDepartmentName(@PathVariable String departmentName) {
		return employeeServices.findByDepartmentName(departmentName);
	}
}
