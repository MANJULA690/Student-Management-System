import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

function AddStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    await axios.post(`${backendUrl}/students`, student);
    navigate('/students');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-4 fw-bold">
        Add New Student
      </h2>
  
      <form
  onSubmit={handleSubmit}
  className="border p-4 rounded shadow-sm bg-light"
  style={{ maxWidth: '600px', margin: '0 auto' }}
>
  {[
    { label: 'Student ID', name: 'studentId', placeholder: 'Enter Student ID ' },
    { label: 'First Name', name: 'firstName', placeholder: 'Enter First Name' },
    { label: 'Last Name', name: 'lastName', placeholder: 'Enter Last Name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email Address ' },
    { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: 'Enter Date of Birth (YYYY-MM-DD)' },
    { label: 'Enrollment Year', name: 'enrollmentYear', type: 'number', placeholder: 'Enter Enrollment Year' }
  ].map(({ label, name, type = 'text', placeholder }) => (
    <div className="mb-3" key={name}>
      <label htmlFor={name} className="form-label fw-semibold">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={student[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  ))}

  <div className="mb-3">
    <label htmlFor="department" className="form-label fw-semibold">Department</label>
    <select
      id="department"
      name="department"
      className="form-select"
      value={student.department}
      onChange={handleChange}
      required
    >
      <option value="">Select Department</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Electronics">Cyber Security</option>
      <option value="Mechanical">Mechanical</option>
      <option value="Civil">Civil</option>
      <option value="Electrical">Electrical</option>
    </select>
  </div>

  <div className="form-check mb-3">
    <input
      type="checkbox"
      className="form-check-input"
      id="isActive"
      name="isActive"
      checked={student.isActive}
      onChange={handleChange}
    />
    <label htmlFor="isActive" className="form-check-label fw-semibold">
      Active
    </label>
  </div>

  <button type="submit" className="btn btn-success w-100">
    Add Student
  </button>
</form>

    </div>
  );
}

export default AddStudent;
