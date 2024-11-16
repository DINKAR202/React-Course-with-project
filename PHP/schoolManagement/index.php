<?php
session_start();

if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] == 'admin') {
        header('Location: admin/admin_dashboard.php');
    } elseif ($_SESSION['role'] == 'student') {
        header('Location: student/student_dashboard.php');
    }
} else {
    header('Location: auth/login.php');
}
exit;
?>
