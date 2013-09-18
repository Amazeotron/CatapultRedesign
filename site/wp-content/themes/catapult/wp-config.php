<?php
# Database Configuration
define('DB_NAME','snapshot_catapult');
define('DB_USER','catapult');
define('DB_PASSWORD','gSCjPCPunDSjuagiRh8m');
define('DB_HOST','127.0.0.1');
define('DB_HOST_SLAVE','localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         '}<)ugr|LYvx![/bZG&&E|hH%pf>#$P6--K|<>3:o-#E`;AF(<.qG5ACd3G[v(U%{');
define('SECURE_AUTH_KEY',  '`bs|BK4Q]A?Q[&<+&IaL-AS%jM;K.+M&Sj,`aL.aU2%`CZ3 ?T3>]AU=4hx*j6XK');
define('LOGGED_IN_KEY',    'VDmDs;Mx-=DHtYUsQ{;nf{soo!%^&=]|-gCo]u>.+ f2U2.`~0CRxOw)]K.[exE+');
define('NONCE_KEY',        'r4]wTC-rnKkO:1/tN5g}^#/;]R+LV$?5L4$h+h%DQW|eqGiXyP.ACJKR5,|$!}5 ');
define('AUTH_SALT',        '1 -d6aAV~vu }&NAG@g|SIIOOpo-h^ur<J`*|P(X)rK:&)}x/nR2PKTDWBr=RY[@');
define('SECURE_AUTH_SALT', ')|W](#QE/Mc`*IUU6XAfYD-X=JzI]GH-?*#t+!G!NR}P)||VKw)nSQ}ScIWe4FrK');
define('LOGGED_IN_SALT',   ';w-T@2B1W*30iFl0tO/D+QH!d$X4{KeWBGP?$LHs&[%nAzTvu5VF^&%1QY=f]} {');
define('NONCE_SALT',       'B+PCUBm14>VJ[),}-6dTP-Ni2Ic<=sBM7Twh:[LuP$]=Z&v..wvvK4-c4b>^V}a ');


# Localized Language Stuff

define('WP_CACHE',TRUE);

define('PWP_NAME','catapult');

define('FS_METHOD','direct');

define('FS_CHMOD_DIR',0775);

define('FS_CHMOD_FILE',0664);

define('PWP_ROOT_DIR','/nas/wp');

define('WPE_APIKEY','85c8e90250cdf3652fe127a6447965a41dfbcdbe');

define('WPE_FOOTER_HTML',"");

define('WPE_CLUSTER_ID','1124');

define('WPE_CLUSTER_TYPE','pod');

define('WPE_ISP',true);

define('WPE_BPOD',false);

define('WPE_RO_FILESYSTEM',false);

define('WPE_LARGEFS_BUCKET','largefs.wpengine');

define('WPE_CDN_DISABLE_ALLOWED',true);

define('DISALLOW_FILE_EDIT',FALSE);

define('DISALLOW_FILE_MODS',FALSE);

define('DISABLE_WP_CRON',false);

define('WPE_FORCE_SSL_LOGIN',false);

define('FORCE_SSL_LOGIN',false);

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define('WPE_EXTERNAL_URL',false);

define('WP_POST_REVISIONS',FALSE);

define('WPE_WHITELABEL','wpengine');

define('WP_TURN_OFF_ADMIN_BAR',false);

define('WPE_BETA_TESTER',false);

define('WP_DEBUG', false);

umask(0002);

$wpe_cdn_uris=array ();

$wpe_no_cdn_uris=array ();

$wpe_content_regexs=array ();

$wpe_all_domains=array (  0 => 'catapult.wpengine.com',);

$wpe_varnish_servers=array (  0 => 'pod-1124',);

$wpe_ec_servers=array ();

$wpe_largefs=array ();

$wpe_netdna_domains=array ();

$wpe_netdna_push_domains=array ();

$wpe_domain_mappings=array ();

$memcached_servers=array ();

define('WP_SITEURL','http://catapult.staging.wpengine.com');

define('WP_HOME','http://catapult.staging.wpengine.com');
define('WPLANG','');

# WP Engine ID


# WP Engine Settings






# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');

$_wpe_preamble_path = null; if(false){}
