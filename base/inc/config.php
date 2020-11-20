<?php
define('BOOL_DEVELMODE',true);

function url(){
    if(isset($_SERVER['HTTPS'])){
        $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    }
    else{
        $protocol = 'http';
    }
    if(BOOL_DEVELMODE) {
        return $protocol . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    }else{
        return $protocol . "://" . $_SERVER['HTTP_HOST'] . '/';
    }
}

define('SITE_BASE_URL',url());
define('FE_URL', '../fe/');
define('SITE_LANG',"IT");

define('SITE_META_TITLE','ilfinoz');
define('SITE_META_DESCRIPTION','cose');