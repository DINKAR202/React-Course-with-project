<?php
session_start();
include '../db/db.php'; // Include database connection
include '../includes/header.php'; // Include header file

// Check if the user is logged in and is a student
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'student') {
    header('Location: ../auth/login.php');
    exit;
}

// Get the logged-in student's ID
$student_id = $_SESSION['user_id'];

// Fetch the courses the student is enrolled in
$query = $conn->prepare("
    SELECT courses.id, courses.name, courses.description, courses.materials 
    FROM enrollments 
    JOIN courses ON enrollments.course_id = courses.id 
    WHERE enrollments.student_id = ?
");
$query->bind_param("i", $student_id);
$query->execute();
$result = $query->get_result();

?>

<h2>Your Enrolled Courses</h2>

<?php if ($result->num_rows > 0): ?>
    <table border="1">
        <thead>
            <tr>
                <th>Course Name</th>
                <th>Description</th>
                <th>Materials</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($course = $result->fetch_assoc()): ?>
                <tr>
                    <td><?php echo htmlspecialchars($course['name']); ?></td>
                    <td><?php echo htmlspecialchars($course['description']); ?></td>
                    <td>
                        <?php if (!empty($course['materials'])): ?>
                            <a href="../assets/files/<?php echo htmlspecialchars($course['materials']); ?>" download>Download</a>
                        <?php else: ?>
                            No Materials Available
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
<?php else: ?>
    <p>You are not enrolled in any courses.</p>
<?php endif; ?>

<?php
include '../includes/footer.php'; // Include footer file
?>
