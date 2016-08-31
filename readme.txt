=== Metro Share ===
Contributors: kasparsd, ryanhellyer, metronet, ronalfy, PerS
Donate link: http://www.metronet.no/
Tags: share, icons, metronet, sharing
Requires at least: 3.6
Tested up to: 4.6
Stable tag: 0.5.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Super fast and super customizable social sharing

== Description ==

Super fast and super customizable social sharing. Adds Facebook, Twitter, Google+, LinkedIn and Email icons to your posts and pages.

= Extension plugins =
* <a href="http://soderlind.no/metro-share-social-fonts/">Metro Share Social Fonts</a>
* <a href="https://geek.hellyer.kiwi/plugins/metro-share-remover/">Metro Share Remover</a>
* <a href="https://geek.hellyer.kiwi/2013/04/03/metro-share-styles/">Metro Share Styles</a>


== Installation ==

Simply install, activate and visit the "Sharing icons" settings page.

By default, the plugin displays the sharing icons via the_content(), however
you may wish to display it elsewhere. If this is the case, please install
the "<a href="http://geek.ryanhellyer.net/products/metro-share-remover/">Metro Share Remover</a>" plugin and add the code <code><?php do_action( 'metroshare' ); ?></code>
wherever you wish to display the sharing icons.

The plugin is provided with CSS by default, but you can unhook this and add your own. For an example of this, check out the "<a href="http://geek.ryanhellyer.net/products/metro-share-styles/">Metro Share Styles</a>" plugin.

== Frequently Asked Questions ==

* Q. I want new icons, how do I do that?
* A. Dequeue the existing CSS and replace it with new CSS. Or try the "Metro Share Styles" plugin.

* Q. Why is this better than other sharing plugins?
* A. It's easier to apply custom styles and features lazy loads it's scripts so that it won't bog down your page loads unnecessarily.

* Q. Why don't you add an administration page to let us customise the icons?
* A. This plugin is intended for use by developers. The plugin is intended to be as extensible. Most changes you might like to make can be achieved via a few lines in a short custom plugin (or in your theme).

== Changelog ==

= 0.5.9 (30/8/2016) =
* Update plugin for [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/).
* Tested & found compatible with WP 4.6.

= 0.5.8 (4/1/2015) =
* Fixed critical bug affecting people using do_action( 'metroshare' )

= 0.5.7 (2/1/2015) =
* Added documentation for extension plugins
* Matching transation slug to new WordPress.org requirements
* Matching indentation and brace coding to new WordPress coding standards

= 0.5.6 (26/8/2013) =
* Added filter to allow for addition of Google Analytics event tracking code

= 0.5.5 (15/8/2013) =
* Setup better UX for entering Twitter handles - now removes @ characters automatically

= 0.5.4 (24/6/2013) =
* Removed redundant form elements and changed to URL with query vars
* Plugin now works correctly when used multiple times on the same page

= 0.5.3 (13/6/2013) =
* Added filter for allow users to modify the prefix text. Useful for translations or if you need different text depending on the page.

= 0.5.2 (4/3/2013) =
* Final touches ready for public release

= 0.5.1 (13/1/2013) =
* Documentation update

= 0.5 (13/12/2012) =
* Updated CSS to use WordPress coding standards
* Added support for adding the content automatically
* Added _icons to end of some functions to make their names clearer
* Removed class of .tabs due to clashes with off the shelf scripts
* Removed unncessary CSS
* Added plugin upgrade block for security purposes

= 0.4 =
* Initial plugin creation

== Credits ==

* <a href="http://metronet.no/">Metronet</a> - Norwegian WordPress developers<br />
* <a href="http://www.dss.dep.no/">DSS</a> - Norwegian Government Administration Services<br />
