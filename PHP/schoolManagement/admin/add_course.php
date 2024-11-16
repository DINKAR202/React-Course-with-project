<?php
session_start();
include 'db.php';

if ($_SESSION['role'] != 'admin') {
    header('Location: login.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $materials = $_POST['materials'];

    $query = $conn->prepare("INSERT INTO courses (name, description, materials) VALUES (?, ?, ?)");
    $query->bind_param("sss", $name, $description, $materials);

    if ($query->execute()) {
        echo "Course added successfully.";
    } else {
        echo "Error: " . $query->error;
    }
}
?>

<form method="POST">
    <label>Course Name:</label>
    <input type="text" name="name" required>
    <label>Description:</label>
    <textarea name="description" required></textarea>
    <label>Materials:</label>
    <textarea name="materials" required></textarea>
    <button type="submit">Add Course</button>
</form>
