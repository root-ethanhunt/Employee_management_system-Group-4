package com.employeemanagement.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="employee")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eid;
	private String username;
	private String password;
	private String email_id;
	private String ename;
	private double esalary;
	private String phone_number;
	private String dob;
	private String location;

	@ManyToOne
	private Department department;

	@ManyToOne
	private Project project;

	
}
