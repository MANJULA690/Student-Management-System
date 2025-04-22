import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaEdit, FaTrashAlt } from 'react-icons/fa';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const fetchStudents = async () => {
    const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
    const res = await axios.get(`${backendUrl}/students`);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async () => {
    if (studentToDelete) {
      const backendUrl = import.meta.env.VITE_APP_BACKEND_BASEURL;
      await axios.delete(`${backendUrl}/students/${studentToDelete}`);
      setShowModal(false);
      fetchStudents();
      setStudentToDelete(null); // Clear the student to delete after action
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Student List
      </h2>

      {/* Student Details Card */}
      {selectedStudent ? (
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body text-center">
            <h4 className="card-title mb-1">
              {selectedStudent.firstName} {selectedStudent.lastName}
            </h4>
            <p className="card-text mb-2">
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <p className="card-text mb-2">
              <strong>Department:</strong> {selectedStudent.department}
            </p>
            <p className="card-text mb-2">
              <strong>Enrollment Year:</strong> {selectedStudent.enrollmentYear}
            </p>
            <p className="card-text mb-3">
              <strong>Status:</strong>{' '}
              <span className={selectedStudent.isActive ? 'text-success' : 'text-danger'}>
                {selectedStudent.isActive ? 'Active' : 'Inactive'}
              </span>
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to={`/edit/${selectedStudent._id}`} className="btn btn-success">
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setStudentToDelete(selectedStudent._id);
                  setShowModal(true);
                }}
              >
                 Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedStudent(null)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>S.No</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Department</th>
                <th>Enrollment Year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student._id}
                  onClick={() => setSelectedStudent(student)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{index + 1}</td>
                  <td>{student.studentId}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.dob.toLocaleString().slice(0,10)}</td>
                  <td>{student.department}</td>
                  <td>{student.enrollmentYear}</td>
                  <td>
                    <span className={student.isActive ? 'text-success' : 'text-danger'}>
                      {student.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this student?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteStudent}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;
