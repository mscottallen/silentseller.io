<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'plhpeumy_WPCMR');

/** Database username */
define('DB_USER', 'plhpeumy_WPCMR');

/** Database password */
define('DB_PASSWORD', 'NLmu4#fN9gJuP^VHI');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '92472ee3d83b14511de419b5504fa4cdb89975fc4a47111102fb5cd23571a9cf');
define('SECURE_AUTH_KEY', '7866e152626084adf6f029b9230850c09f73646d59557e52934f4428c2e99f2c');
define('LOGGED_IN_KEY', '9e6052e2693d7167def4c5e1f62ab10cbab16d95b05c3d5f71b4df3eea268c11');
define('NONCE_KEY', '4ab550c94c04b98cbb072bce8742e210a9cc99816b93f9adead05053c844169b');
define('AUTH_SALT', '81dadf920e5da773615c346bb39f15d546362314d25eda72e9c6d2925b5f7e05');
define('SECURE_AUTH_SALT', '8958e82fac73f27ef1f7f32f3cb13f35537c0c31c43eda197f7485d5754f60f1');
define('LOGGED_IN_SALT', '169273436a22d0b88d341b072ebe7c2556dcffdc3b95a00c565769c50a94afca');
define('NONCE_SALT', 'ff4471b91296ce2eb061409b2fbc2e1dc43bf67a0f99dc15130c8e28f4a307d3');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'd0G_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
