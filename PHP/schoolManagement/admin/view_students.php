<?php
session_start();
include '../db/db.php'; // Include database connection
include '../includes/header.php'; // Include header file

// Check if the user is logged in and is an admin
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header('Location: ../auth/login.php');
    exit;
}

// Handle student deletion
if (isset($_GET['delete'])) {
    $student_id = $_GET['delete'];

    // Delete the student from the database
    $deleteQuery = $conn->prepare("DELETE FROM students WHERE id = ?");
    $deleteQuery->bind_param("i", $student_id);
    if ($deleteQuery->execute()) {
        echo "<p>Student deleted successfully.</p>";
    } else {
        echo "<p>Error deleting student: " . $conn->error . "</p>";
    }
}

// Fetch all students from the database
$query = $conn->prepare("SELECT * FROM students");
$query->execute();
$result = $query->get_result();
?>

<h2>View and Manage Students</h2>

<?php if ($result->num_rows > 0): ?>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($student = $result->fetch_assoc()): ?>
                <tr>
                    <td><?php echo htmlspecialchars($student['id']); ?></td>
                    <td><?php echo htmlspecialchars($student['name']); ?></td>
                    <td><?php echo htmlspecialchars($student['email']); ?></td>
                    <td><?php echo htmlspecialchars($student['status']); ?></td>
                    <td>
                        <a href="view_students.php?delete=<?php echo $student['id']; ?>" 
                           onclick="return confirm('Are you sure you want to delete this student?');">
                           Delete
                        </a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
<?php else: ?>
    <p>No students found.</p>
<?php endif; ?>

<?php
include '../includes/footer.php'; // Include footer file
?>
