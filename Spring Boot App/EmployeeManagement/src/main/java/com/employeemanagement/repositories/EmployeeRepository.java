package com.employeemanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.employeemanagement.models.Employee;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	@Query(value="select e from Employee e where e.username=:username and e.password=:password")
	Employee findByUserPassword(@Param("username") String username, @Param("password") String password);
	
	@Query(value="select count(eid) from employee where department_dept_id=?1", nativeQuery=true)
	int countByDept(int id);
	
	@Query(value="select * from employee where department_dept_id=?1 order by eid asc", nativeQuery=true)
	List<Employee> findByDept(int id);
	
	@Query(value="select count(eid) from employee where project_project_id=?1", nativeQuery=true)
	int countByProject(int id);
	
	@Query(value="select count(eid) from employee", nativeQuery=true)
	int totalCount();
	
	@Query(value="select eid from employee where ename=?1", nativeQuery=true)
	int findIdByName(String name);
	
	@Query(value="select * from employee where project_project_id=?1 order by eid asc", nativeQuery=true)
	List<Employee> findByProject(int id);
	
	@Modifying
	@Transactional
	@Query(value="update employee set password=?1 where eid=?2", nativeQuery=true)
	void updatePassword(String pass, int eid);

	
//	@Query(value="update Employee e set e.username=:username where e.eid=:eid")
//	void updateUsername(@Param("username") String username, @Param("eid") int eid);
//	
//	@Query(value="update employee set username=?1 where eid=?2", nativeQuery=true)
//	void updateUsername(String username, int eid);
//	

	
    List<Employee> findByProject_ProjectName(String projectName);
    List<Employee> findByDepartment_DeptName(String deptName);
}
