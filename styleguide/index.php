<?php
include "../base/inc/config.php";
//include '../base/utils/php_debug.php';
include '../base/utils/is_localhost.php';
?>
<!DOCTYPE html>
<html lang="<?= SITE_LANG; ?>">
<?php include "../base/inc/head.php"; ?>
<body data-page="styleguide">
<?php include "../base/inc/header.php"; ?>
<main id="main">
	<?php include "../base/inc/block-hero.php"; ?>
	<section class="page-content">
		<?php include "../base/inc/block-naif-slider.php"; ?>
		<?php include "../base/inc/block-typography.php"; ?>
	</section>
</main>
</body>
<?php include "../base/inc/scripts.php"; ?>
</html>