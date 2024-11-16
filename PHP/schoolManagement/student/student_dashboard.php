<?php
session_start();
include 'db.php';

if ($_SESSION['role'] != 'student') {
    header('Location: login.php');
    exit;
}

$student_id = $_SESSION['user_id'];

$query = $conn->prepare("
    SELECT c.name, c.description, c.materials
    FROM enrollments e
    JOIN courses c ON e.course_id = c.id
    WHERE e.student_id = ?
");
$query->bind_param("i", $student_id);
$query->execute();
$result = $query->get_result();
?>

<h2>Your Courses</h2>
<ul>
    <?php while ($course = $result->fetch_assoc()): ?>
        <li>
            <h3><?php echo $course['name']; ?></h3>
            <p><?php echo $course['description']; ?></p>
            <p>Materials: <?php echo $course['materials']; ?></p>
        </li>
    <?php endwhile; ?>
</ul>
