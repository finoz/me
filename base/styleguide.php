<?php
include "inc/config.php";
//include 'utils/php_debug.php';
include 'utils/is_localhost.php';
?>
<!DOCTYPE html>
<html lang="<?= SITE_LANG; ?>">
<?php include "inc/head.php"; ?>
<body data-page="styleguide">
<?php include "inc/header.php"; ?>
<main id="main">
	<section class="page-content">
		<?php include "inc/content-demo.php"; ?>
	</section>
</main>
</body>
<?php include "inc/scripts.php"; ?>
</html>