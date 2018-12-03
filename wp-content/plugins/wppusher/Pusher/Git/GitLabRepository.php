<?php

namespace Pusher\Git;

use Exception;

class GitLabRepository extends Repository
{
    public $code = 'gl';

    public function getZipUrl()
    {
        $baseUrl = get_option('gl_base_url');

        if ( is_string($baseUrl) && $baseUrl === '')
            throw new Exception('No GitLab base url stored.');

        if ($this->isPrivate()) {
            add_filter( 'http_request_args', array($this, 'gitLabBasicAuth'), 10, 2 );
        }

        $url = trailingslashit($baseUrl) . 'api/v4/projects/' . urlencode($this->handle) . '/repository/archive.zip?sha=' . $this->getBranch() . '&dir=/wppusher';

        return $url;
    }

    public function gitLabBasicAuth($args, $url)
    {
        $baseUrl = get_option('gl_base_url');

        if ( is_string($baseUrl) && $baseUrl === '')
            throw new Exception('No GitLab base url stored.');

        if ( ! strstr($url, trailingslashit($baseUrl)))
            return $args;

        $token = get_option('gl_private_token');

        if ( is_string($token) && $token === '')
            throw new Exception('No GitLab token stored.');

        $args['headers']['PRIVATE-TOKEN'] = $token;

        return $args;
    }
}
