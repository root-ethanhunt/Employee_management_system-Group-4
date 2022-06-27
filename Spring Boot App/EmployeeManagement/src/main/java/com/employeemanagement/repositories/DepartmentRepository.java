package com.employeemanagement.repositories;

import com.employeemanagement.models.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
	
//	@Modifying(clearAutomatically = true)
//	@Transactional
//	@Query(value="update department d set d.totalEmpInDept=:cid where d.deptId=:did")
//	void updateEmpCount(@Param("cid") int cid, @Param("did") int did);
//	
	@Modifying
	@Transactional
	@Query(value="update department set total_emp_in_dept=?1 where dept_id=?2", nativeQuery=true)
	void updateEmpCount(int cid, int did);
	
	@Query(value="select count(dept_id) from department", nativeQuery=true)
	int totalCount();
}
