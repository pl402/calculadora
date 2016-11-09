<?php

OCP\User::checkAdminUser();

OCP\Util::addScript( "calculadora", "admin" );

$tmpl = new OCP\Template( 'calculadora', 'settings');

$tmpl->assign('url', OCP\Config::getSystemValue( "somesetting", '' ));

return $tmpl->fetchPage();
