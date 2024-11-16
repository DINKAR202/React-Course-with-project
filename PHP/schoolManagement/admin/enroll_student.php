<?php
session_start();
include 'db.php';

if ($_SESSION['role'] != 'admin') {
    header('Location: login.php');
    exit;
}

$students = $conn->query("SELECT * FROM students");
$courses = $conn->query("SELECT * FROM courses");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $student_id = $_POST['student_id'];
    $course_id = $_POST['course_id'];

    $query = $conn->prepare("INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)");
    $query->bind_param("ii", $student_id, $course_id);

    if ($query->execute()) {
        echo "Student enrolled successfully.";
    } else {
        echo "Error: " . $query->error;
    }
}
?>

<form method="POST">
    <label>Select Student:</label>
    <select name="student_id" required>
        <?php while ($row = $students->fetch_assoc()): ?>
            <option value="<?php echo $row['id']; ?>"><?php echo $row['name']; ?></option>
        <?php endwhile; ?>
    </select>
    <label>Select Course:</label>
    <select name="course_id" required>
        <?php while ($row = $courses->fetch_assoc()): ?>
            <option value="<?php echo $row['id']; ?>"><?php echo $row['name']; ?></option>
        <?php endwhile; ?>
    </select>
    <button type="submit">Enroll</button>
</form>
