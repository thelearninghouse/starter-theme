<?php

namespace Pusher;

/**
 * Interface Container
 * @package Pusher
 */
interface Container
{
    /**
     * Bind a service to the container.
     *
     * @param $alias
     * @param $concrete
     * @return mixed
     */
    public function bind($alias, $concrete);

    /**
     * Request a service from the container.
     *
     * @param $alias
     * @return mixed
     */
    public function make($alias);
}
