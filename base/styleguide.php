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
	<?php include "inc/block-hero.php"; ?>
	<section class="page-content">
		<?php include "inc/block-naif-slider.php"; ?>
		<?php include "inc/block-typography.php"; ?>
	</section>
</main>
</body>
<?php include "inc/scripts.php"; ?>
</html>