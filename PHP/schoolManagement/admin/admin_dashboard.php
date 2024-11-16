<?php
session_start();
include '../db/db.php'; // Include database connection
include '../includes/header.php'; // Include header file

// Check if the user is logged in and is an admin
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header('Location: ../auth/login.php');
    exit;
}
?>

<h2>Admin Dashboard</h2>

<div>
    <h3>Manage Students</h3>
    <ul>
        <li><a href="add_student.php">Add Student</a></li>
        <li><a href="view_students.php">View and Remove Students</a></li>
    </ul>
</div>

<div>
    <h3>Manage Courses</h3>
    <ul>
        <li><a href="add_course.php">Add Course</a></li>
        <li><a href="view_courses.php">View Courses</a></li>
    </ul>
</div>

<div>
    <h3>Enrollments</h3>
    <ul>
        <li><a href="enroll_student.php">Enroll Student in Course</a></li>
        <li><a href="view_enrollments.php">View Enrollments</a></li>
    </ul>
</div>

<?php
include '../includes/footer.php'; // Include footer file
?>
