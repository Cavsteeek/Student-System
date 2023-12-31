package com.cavsteek.studentsystem.service;

import com.cavsteek.studentsystem.model.Student;
import com.cavsteek.studentsystem.repository.StudentRepository;
import org.hibernate.annotations.SecondaryRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

}
