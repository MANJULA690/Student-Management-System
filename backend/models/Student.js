import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    match: /^[a-zA-Z0-9]+$/,  
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  
  },
  dob: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: ['Computer Science', 'Electronics', 'Information Technology','Mechanical', 'Civil', 'Electrical'], 
  },
  enrollmentYear: {
    type: Number,
    required: true,
    min: 2000,
    max: new Date().getFullYear(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
