<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html>
<?php 
$Name = "";
$Greeting = "";
$Date = date("l");
?>

<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/wordpress/wp-content/themes/demo/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Wellborn Demo"
    />
    <!-- <script type="text/javascript">var userName = <?php echo ($userName); ?>;</script> -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <title>WCI</title>
<link href="/wordpress/wp-content/themes/demo/static/css/main.chunk.css?d879115a4dcace49c67d" rel="stylesheet"></head>
    <body>
        <?php
            $url="http://api.openweathermap.org/data/2.5/forecast?q=Birmingham,usl&APPID=5099c5feb579c7a17b030de0d009282f&units=imperial";
            $json=file_get_contents($url);
            $data=json_decode($json);
            $City= "Ashland, Alabama";
        echo "<div id='topHeader'>";
            echo '<div>', $City, '</div>';
            echo '<div><strong>Current:</strong> ', $data->list[0]->main->temp, '&deg; F</div>';
            ?>

        <div id="welcomeBox">
    <?php
    
$dt = new DateTime("now", new DateTimeZone('America/Chicago'));
echo $dt->format('l, jS \of F Y, g:i:s A');
echo "</div>";
?>
</div>
<noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">

</div>
<script src="/wordpress/wp-content/themes/demo/static/js/bundle.js?d879115a4dcace49c67d"></script><script src="/wordpress/wp-content/themes/demo/static/js/0.chunk.js?d879115a4dcace49c67d"></script><script src="/wordpress/wp-content/themes/demo/static/js/main.chunk.js?d879115a4dcace49c67d"></script></body>
<footer>
</footer>
    </html>
