 import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';

function EditStudent() {
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    axios.get(`${backendUrl}/students/${id}`).then(res => {
      setStudent(res.data);
    });
  }, [id]);

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
    await axios.put(`${backendUrl}/students/${id}`, student);
    navigate('/students');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4 fw-bold">
        Edit Student
      </h2>

      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm bg-light"
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        {[
          { label: 'Student ID', name: 'studentId' },
          { label: 'First Name', name: 'firstName' },
          { label: 'Last Name', name: 'lastName' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Date of Birth', name: 'dob', type: 'date' },
          { label: 'Department', name: 'department' },
          { label: 'Enrollment Year', name: 'enrollmentYear', type: 'number' }
        ].map(({ label, name, type = 'text' }) => (
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
              required
            />
          </div>
        ))}

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

        <button type="submit" className="btn btn-success w-100 fw-semibold">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
