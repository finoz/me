<?php
include "inc/config.php";
//include 'utils/php_debug.php';
include 'utils/is_localhost.php';
?>
<!DOCTYPE html>
<html lang="<?= SITE_LANG; ?>">
<?php include "inc/head.php"; ?>
<body>
<main>
	<header>
		<h1>Main title</h1>
		<h2>Secondary headings</h2>
		<h3>3° headings</h3>
		<h4>4° headings</h4>
	</header>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa debitis dolorem dolorum error eum ex fugiat illum magni officiis omnis perferendis quibusdam, quis reiciendis reprehenderit ut voluptatibus! Necessitatibus,
		ut!</p>
	<ul>
		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
		<li>Alias cumque deleniti ea esse, et explicabo facere.</li>
		<li>Illum in itaque nam nihil non nostrum, quae reprehenderit saepe soluta voluptas. Excepturi, veniam!</li>
	</ul>
	<ol>
		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
		<li>Alias cumque deleniti ea esse, et explicabo facere.</li>
		<li>Illum in itaque nam nihil non nostrum, quae reprehenderit saepe soluta voluptas. Excepturi, veniam!</li>
	</ol>
	<figure>
		<img src='https://picsum.photos/200/300' alt='sample picture'>
	</figure>
</main>
</body>
<?php include "inc/scripts.php"; ?>
</html>