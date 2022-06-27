package com.employeemanagement.repositories;

import com.employeemanagement.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
	
	@Modifying
	@Transactional
	@Query(value="update project set total_emp_in_project=?1 where project_id=?2", nativeQuery=true)
	void updateEmpCount(int cid, int pid);
	
	@Query(value="select count(project_id) from project", nativeQuery=true)
	int totalCount();
}
