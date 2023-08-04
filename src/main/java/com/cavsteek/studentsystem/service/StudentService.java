package com.cavsteek.studentsystem.service;

import com.cavsteek.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();



}
