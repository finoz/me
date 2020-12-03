<?php
include "../../base/inc/config.php";
include '../../base/utils/is_localhost.php';
?>
<!DOCTYPE html>
<html lang="<?= SITE_LANG; ?>">
<?php include "../../base/inc/head.php"; ?>
<body>
<div class="page">
	<main id="main">
		<section class="farfallino" data-component="farfallino">
			<div class="farfallino-input">
				<textarea name="afarefa" id="afarefa" cols="30" rows="10" class="farfalino-input-textarea"></textarea>
			</div>
			<div class="farfallino-output"></div>
		</section>
	</main>
</div>
</body>
<?php include "../../base/inc/scripts.php"; ?>
</html>